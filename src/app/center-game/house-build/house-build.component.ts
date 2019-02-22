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
    modalImg.src = event.target.src;
  }
}
