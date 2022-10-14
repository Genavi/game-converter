import { Component, OnInit } from '@angular/core';
import { IcsService } from '../../shared/services/ics.service';

interface Season {
  name: string;
  id: string;
}
@Component({
  selector: 'app-seasonselect',
  templateUrl: './seasonselect.component.html',
  styleUrls: ['./seasonselect.component.scss']
})
export class SeasonselectComponent implements OnInit {
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

  constructor(public icsService: IcsService) { }
  ngOnInit(): void {
  }

}
