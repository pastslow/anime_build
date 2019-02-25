import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-land-slots',
  templateUrl: './land-slots.component.html',
  styleUrls: ['./land-slots.component.css']
})
export class HouseBuildComponent implements OnInit {

  public mapNumber = 0;
  public isLandBought = false;
  public hasConstruction = false;

  public mapSlots = [
    {
      name: "Easy Map",
      topSlots: [
        {
          img: "house0/none0",
          condition: "empty"
        },
        {
          img: "house0/none1",
          condition: "bought"
        },
        {
          img: "house0/none0",
          condition: "empty"
        },
        {
          img: "house0/none1",
          condition: "bought"
        },
        {
          img: "house0/none0",
          condition: "empty"
        },
      ],
      midSlots: [
        {
          img: "house0/none0",
          condition: "empty"
        },
        {
          img: "house0/none0",
          condition: "empty"
        },
        {
          img: "house0/none0",
          condition: "empty"
        },
        {
          img: "house0/none0",
          condition: "empty"
        },
        {
          img: "house0/none0",
          condition: "empty"
        },
      ],
      bottomSlots: [
        {
          img: "house0/none0",
          condition: "empty"
        },
        {
          img: "house0/none0",
          condition: "empty"
        },
        {
          img: "house0/none0",
          condition: "empty"
        },
        {
          img: "house0/none0",
          condition: "empty"
        },
        {
          img: "house1/construct/construct08",
          condition: "build"
        },
      ]
    },
  ]
  constructor() { }

  ngOnInit() {
  }

  test(modalImg, event) {
    if(event.target.slot === "empty"){
      this.isLandBought = false;
      this.hasConstruction = false;
      modalImg.src = event.target.src;
      return;
    }
    if(event.target.slot === "bought"){
      this.isLandBought = true;
      this.hasConstruction = false;
      modalImg.src = event.target.src;
      return;
    }
    modalImg.src = event.target.src;
    this.isLandBought = false;
    this.hasConstruction = true;
    
  }
}
