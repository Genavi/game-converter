import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gametable',
  templateUrl: './gametable.component.html',
  styleUrls: ['./gametable.component.scss']
})
export class GametableComponent implements OnInit {
  @Input() xmlItems!: any;
  public displayedColumns: string[] = ['uid','federation','category','home', 'guest','start','end', 'location'];

  constructor() { }

  ngOnInit(): void {
  }

}
