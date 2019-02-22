import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-build',
  templateUrl: './house-build.component.html',
  styleUrls: ['./house-build.component.css']
})
export class HouseBuildComponent implements OnInit {

  public mapNumber = 0;

  public mapSlots = [
    {
      name: "Easy Map",
      topSlots:[
        {
          img:"none0",
          position:"slot0"
        },
        {
          img:"none0",
          position:"slot1"
        },
        {
          img:"none0",
          position:"slot2"
        },
        {
          img:"none0",
          position:"slot3"
        },
        {
          img:"none0",
          position:"slot4"
        },
      ],
      midSlots:[
        {
          img:"none0",
          position:"slot0"
        },
        {
          img:"none0",
          position:"slot1"
        },
        {
          img:"none0",
          position:"slot2"
        },
        {
          img:"none0",
          position:"slot3"
        },
        {
          img:"none0",
          position:"slot4"
        },
      ],
      bottomSlots:[
        {
          img:"none0",
          position:"slot0"
        },
        {
          img:"none0",
          position:"slot1"
        },
        {
          img:"none0",
          position:"slot2"
        },
        {
          img:"none0",
          position:"slot3"
        },
        {
          img:"none0",
          position:"slot4"
        },
      ]
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
