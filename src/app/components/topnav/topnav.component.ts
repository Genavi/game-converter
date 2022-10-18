import { Component, Input, OnInit } from '@angular/core';
import { IcsService } from '../../shared/services/ics.service';
import { AuthService } from '../../shared/services/auth.service';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

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
  faSignOut = faSignOut;
  currentYear: number = new Date().getFullYear();
  lastYear: number = this.currentYear - 1;
  lastId: number = this.lastYear - 1996;
  nextYear: number = this.currentYear + 1;
  currentId: number = this.currentYear - 1995;

  seasons: Season[] = [
    {name: `${this.lastYear}/${this.currentYear}`, id: `${this.lastId}`},
    {name: `${this.currentYear}/${this.nextYear}`, id: `${this.currentId}`}
  ];

  constructor(public icsService: IcsService, public authService: AuthService) { }

  ngOnInit(): void {
  }

  download() {
    let content = this.icsService.createEvent(this.xmlItems);
    this.icsService.download("dnal.ics", content);
  }

  setupSeasonDropdown() {
  }
}
