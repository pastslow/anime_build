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
      bg:"rgba(244, 22, 33, 0.8)"
    },
    {
      name:"Materials",
      icon:'materials',
      value:500,
      bg:"rgba(22, 33, 255, 0.8)"
    },
    {
      name:"Workers",
      icon:'worker',
      value:500,
      bg:"rgba(146, 146, 0, 0.8)"
    },
    {
      name:"Engineers",
      icon:'engineer',
      value:500,
      bg:"rgba(22, 128, 128, 0.8)"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
