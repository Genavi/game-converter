import { Injectable } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { IcsService } from '../../shared/services/ics.service';
import { Event } from '../../shared/services/event';
import { DatePipe } from '@angular/common';
import * as xml2js from 'xml2js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { min, Observable } from 'rxjs';

interface Season {
  name: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class GamedataService {
  public activeTeam: number = 4113;
  private currentYear: number = new Date().getFullYear();
  private lastYear: number = this.currentYear - 1;
  private lastId: number = this.lastYear - 1995;
  private nextYear: number = this.currentYear + 1;
  private currentId: number = this.currentYear - 1995;

  public seasons: Season[] = [
    {name: `${this.lastYear}/${this.currentYear}`, id: this.lastId},
    {name: `${this.currentYear}/${this.nextYear}`, id: this.currentId}
  ];
  public teams: Season[] = [];

  public activeSeason: number = this.seasons[1].id;
  public xmlItems: any;

  constructor(private afs: AngularFirestore, public authService: AuthService, private icsService: IcsService, private _http: HttpClient, private datePipe: DatePipe) {
    this.getTeams()
  }

  private async getTeams() {
    await this.afs.collection<Season>('teams', ref => ref.orderBy('name')).valueChanges().forEach(t => {
      t.forEach(val => {
        this.teams.push(val)
      })
    });
  }
  
  public SetTeams() {
    console.log()
  }

  private getTeam(): string {
    let id = this.teams.findIndex((i: Season)=> i.id == this.activeTeam);
    return this.teams[id].name;
  }

  public async loadXML() { 
    await this._http.get(`https://www.basketplan.ch/showTeamSchedule.do?lang=de&xmlView=rss&seasonId=${this.activeSeason}&teamId=${this.activeTeam}`,
      {  
        headers: new HttpHeaders(),
        responseType: 'text'  
      })  
      .subscribe((data) => {  
        this.parseXML(data)  
          .then((data) => {  
            this.xmlItems = data;  
          });  
      });   
  }

  private parseXML(data: string) {
    return new Promise(resolve => {
      var k: Event,  
      arr = [],  
      parser = new xml2js.Parser({  
        trim: true,  
        explicitArray: true  
      }); 

    parser.parseString(data,  (err, result) => {
      var events: Event[] = [];
      var obj;
      if(result.basketplan.games) {
        obj = result.basketplan.games[0].Array[0].GameSummaryVO;
      } else {
        obj = [];
      }
      for (var k in obj) {
        var item = obj[k].$;
        var address = obj[k].location[0].address[0].$;
        var category = obj[k].location[0].category[0].$

        const [year, month, day] = item.date.split('-');
        const [hour, minute] = item.time.split(':');
        let startdate = new Date(year, month-1, day, hour, minute);
        let enddate = new Date(startdate.getTime() + 2 * 60 * 60 * 1000)

        
        let fed = "";

        switch(item.nameLeagueHolding) {
          case "Patrick Baumann Swiss Cup Women": {
            fed = "DCoupe Suisse";
            break;
          }
          case "Patrick Baumann Swiss Cup Men": {
            fed = "HCoupe Suisse";
            break;
          }
          default: {
            fed = this.getTeam();
            break;
          }
        }
        
        let defHome = (item.homeTeamName.includes("BC Alte Kanti")) ? ("BC AKA") : (item.homeTeamName);
        let defGuest = (item.guestTeamName.includes("BC Alte Kanti")) ? ("BC AKA") : (item.guestTeamName);
        let devCat = (category.label == "-") ? ("") : (" ("+category.label+")");
        let add = (address.city == "Aarau 4 Telli") ? ("Aarau") : (address.city);
        let addr = (address.line1) ? (address.line1.replace('ß', 'ss') + ", " + address.zip + " " + add) : (address.zip + " " + add);

        const event: Event = {
          uid: item.gameId,
          federation: fed, 
          home: defHome,
          guest: defGuest,
          start: startdate,
          end: enddate,
          location: addr,
          category: "Spiel" + devCat,
          description: "",
        };

        events.push(event);
      }
       
      resolve(events);
      }); 
    });
  }

  download() {
    let content = this.icsService.createEvent(this.xmlItems);
    this.icsService.download(`${this.getTeam()}.ics`, content);
  }
}
