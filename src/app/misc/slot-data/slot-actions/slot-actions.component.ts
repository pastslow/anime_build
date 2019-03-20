import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slot-actions',
  templateUrl: './slot-actions.component.html',
  styleUrls: ['./slot-actions.component.css']
})
export class SlotActionsComponent implements OnInit {


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
      icon: "CONSTRUCT_HOUSE",
      btnMethod: () => this.constructBuilding("Houses")
    },
    {
      name: "Building",
      icon: "CONSTRUCT_BUILDING",
      btnMethod: () => this.constructBuilding("Buildings")
    },
    {
      name: "Shop",
      icon: "CONSTRUCT_SHOP",
      btnMethod: () => this.constructBuilding("Shops")
    },
    {
      name: "Mark",
      icon: "CONSTRUCT_MARK",
      btnMethod: () => this.constructBuilding("Marks")
    },
    {
      name: "Service",
      icon: "CONSTRUCT_SERVICE",
      btnMethod: () => this.constructBuilding("Services")
    },
  ]

  constructor() { }

  ngOnInit() {

  }

}
