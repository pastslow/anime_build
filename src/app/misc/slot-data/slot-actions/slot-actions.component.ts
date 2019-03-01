import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-slot-actions',
  templateUrl: './slot-actions.component.html',
  styleUrls: ['./slot-actions.component.css']
})
export class SlotActionsComponent implements OnInit,OnChanges {


  public parentData = {
    buttonNamePressed: "Houses",
  }

  public returnToMenu = false;

  public menuIsDisplayed = true;
  public isBuildingBtnPressed = false;

  constructBuilding = (button) => {
    this.returnToMenu = false;
    this.parentData.buttonNamePressed = button;
    this.menuIsDisplayed = false;
    this.isBuildingBtnPressed = true;
  }

  public slotActions = [
    {
      name: "House",
      icon: "construct_house",
      btnMethod: () => this.constructBuilding("Houses")
    },
    {
      name: "Building",
      icon: "construct_building",
      btnMethod: () => this.constructBuilding("Buildings")
    },
    {
      name: "Shop",
      icon: "construct_shop",
      btnMethod: () => this.constructBuilding("Shops")
    },
    {
      name: "Mark",
      icon: "construct_mark",
      btnMethod: () => this.constructBuilding("Marks")
    },
    {
      name: "Service",
      icon: "construct_service",
      btnMethod: () => this.constructBuilding("Services")
    },
  ]

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes:SimpleChanges){

  }

}
