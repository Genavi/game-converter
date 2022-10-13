import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { IcsService } from '../../shared/services/ics.service';
import { FormControl, Validators } from '@angular/forms';

interface Season {
  name: string;
  id: string;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  seasonControl = new FormControl<Season | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
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

  constructor(public authService: AuthService, public icsService: IcsService) { }

  ngOnInit(): void {
  }

}
