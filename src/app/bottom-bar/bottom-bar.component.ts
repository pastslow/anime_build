import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent implements OnInit {

  public bottomItems = [
    {
      name:"Income",
      icon:'income',
      value:500
    },
    {
      name:"Money",
      icon:'money',
      value:500
    },
    {
      name:"Materials",
      icon:'materials',
      value:500
    },
    {
      name:"Workers",
      icon:'worker',
      value:500
    },
    {
      name:"Engineers",
      icon:'engineer',
      value:500
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
