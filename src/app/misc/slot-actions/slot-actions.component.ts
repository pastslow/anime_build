import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slot-actions',
  templateUrl: './slot-actions.component.html',
  styleUrls: ['./slot-actions.component.css']
})
export class SlotActionsComponent implements OnInit {

  public slotActions = [
    {
      name:"House",
      icon:"construct_house"
    },
    {
      name:"Building",
      icon:"construct_building"
    },
    {
      name:"Shop",
      icon:"construct_shop"
    },
    {
      name:"Mark",
      icon:"construct_mark"
    },
    {
      name:"Service",
      icon:"construct_service"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
