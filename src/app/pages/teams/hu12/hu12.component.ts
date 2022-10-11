import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { IcsService } from '../../../shared/services/ics.service';
import { Event } from '../../../shared/services/event';
import { DatePipe } from '@angular/common';
import * as xml2js from 'xml2js';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-hu12',
  templateUrl: './hu12.component.html',
  styleUrls: ['./hu12.component.scss']
})
export class Hu12Component implements OnInit {
  public xmlItems: any;

  constructor(public authService: AuthService, private icsService: IcsService, private _http: HttpClient, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.loadXML();
  }

  async loadXML() {  
    await this._http.get('https://www.basketplan.ch/showTeamSchedule.do?lang=de&xmlView=rss&seasonId=27&teamId=6428',
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

  parseXML(data: string) {
    return new Promise(resolve => {
      var k: Event,  
      arr = [],  
      parser = new xml2js.Parser({  
        trim: true,  
        explicitArray: true  
      }); 

    parser.parseString(data, function (err, result) {
      var arr: Event[] = [];
      var obj = result.basketplan.games[0].Array[0].GameSummaryVO;
      for (var k in obj) {
        var item = obj[k].$;
        var address = obj[k].location[0].address[0].$;
        var category = obj[k].location[0].category[0].$

        const [year, month, day] = item.date.split('-');
        const [hour, minute] = item.time.split(':');

        let startdate = new Date(year, month, day, hour, minute);
        let enddate = new Date(startdate.getTime() + 2 * 60 * 60 * 1000)
        
        let fed = "";
        if(item.nameLeagueHolding.includes("Saison")){
          fed = "HU12";
        } else {
          switch(item.nameLeagueHolding) {
            default: {
              fed = item.nameLeagueHolding;
              break;
            }
          }
        }
        

        let defHome = (item.homeTeamName.includes("BC Alte Kanti")) ? ("BC AKA") : (item.homeTeamName);
        let defGuest = (item.guestTeamName.includes("BC Alte Kanti")) ? ("BC AKA") : (item.guestTeamName);
        let devCat = (category.label == "-") ? ("") : (" ("+category.label+")");
        let add = (address.city == "Aarau 4 Telli") ? ("Aarau") : (address.city);

        const event: Event = {
          uid: item.gameId,
          federation: fed, 
          home: defHome,
          guest: defGuest,
          start: startdate,
          end: enddate,
          location: address.line1 + ", " + address.zip + " " + add,
          category: "Spiel" + devCat,
          description: "",
        };

        arr.push(event);

      }
      resolve(arr);  

      });
    });
  }

  download() {
    let content = this.icsService.createEvent(this.xmlItems);
    this.icsService.download("hu12.ics", content);
  }
}
