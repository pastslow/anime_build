import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-land-slots',
  templateUrl: './land-slots.component.html',
  styleUrls: ['./land-slots.component.css']
})
export class HouseBuildComponent implements OnInit {

  public mapNumber = 0;
  public isLandBought = true;

  public mapSlots = [
    {
      name: "Easy Map",
      topSlots: [
        {
          img: "none0",
          name: "slot0"
        },
        {
          img: "none1",
          name: "slot1"
        },
        {
          img: "none0",
          name: "slot2"
        },
        {
          img: "none1",
          name: "slot3"
        },
        {
          img: "none0",
          name: "slot4"
        },
      ],
      midSlots: [
        {
          img: "none0",
          name: "slot0"
        },
        {
          img: "none0",
          name: "slot1"
        },
        {
          img: "none0",
          name: "slot2"
        },
        {
          img: "none0",
          name: "slot3"
        },
        {
          img: "none0",
          name: "slot4"
        },
      ],
      bottomSlots: [
        {
          img: "none0",
          name: "slot0"
        },
        {
          img: "none0",
          name: "slot1"
        },
        {
          img: "none0",
          name: "slot2"
        },
        {
          img: "none0",
          name: "slot3"
        },
        {
          img: "none0",
          name: "slot4"
        },
      ]
    },
  ]
  constructor() { }

  ngOnInit() {
  }

  test(modalImg, event) {
    if(event.target.slot == "none0"){
      this.isLandBought = false;
      modalImg.src = event.target.src;
      return;
    }
    modalImg.src = event.target.src;
    this.isLandBought = true;
  }
}
