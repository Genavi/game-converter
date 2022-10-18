import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { IcsService } from '../../shared/services/ics.service';
import { GamedataService } from '../../shared/services/gamedata.service';
import { Event } from '../../shared/services/event';
import { DatePipe } from '@angular/common';
import * as xml2js from 'xml2js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

interface Season {
  name: string;
  id: number;
}

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss']
})
export class ConvertComponent implements OnInit {
  faDownload = faDownload;

  constructor(public authService: AuthService, public icsService: IcsService, public gamedataService: GamedataService, private _http: HttpClient, private datePipe: DatePipe) {
  }
  ngOnInit(): void {
    this.gamedataService.loadXML();
  }

}
