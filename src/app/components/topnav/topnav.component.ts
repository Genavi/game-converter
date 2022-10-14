import { Component, Input, OnInit } from '@angular/core';
import { IcsService } from '../../shared/services/ics.service';
import { AuthService } from '../../shared/services/auth.service';

interface Season {
  name: string;
  id: string;
}

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
  @Input() xmlItems!: any;
  seasons: Season[] = [
    {name: '22/23', id: '27'},
    {name: '23/24', id: '28'},
    {name: '24/25', id: '29'},
    {name: '25/26', id: '30'},
    {name: '26/27', id: '31'},
    {name: '27/28', id: '32'},
    {name: '28/29', id: '33'},
    {name: '29(30', id: '34'},
  ];

  constructor(public icsService: IcsService, public authService: AuthService) { }

  ngOnInit(): void {
  }

  download() {
    let content = this.icsService.createEvent(this.xmlItems);
    this.icsService.download("dnal.ics", content);
  }
}
