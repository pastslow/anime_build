import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent implements OnInit {

  public bottomItems = [
    {
      name:"Money",
      icon:'money',
      value:500,
      bg:"red"
    },
    {
      name:"Materials",
      icon:'materials',
      value:500,
      bg:"blue"
    },
    {
      name:"Workers",
      icon:'worker',
      value:500,
      bg:"yellow"
    },
    {
      name:"Engineers",
      icon:'engineer',
      value:500,
      bg:"teal"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
