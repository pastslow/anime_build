import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slot-actions',
  templateUrl: './slot-actions.component.html',
  styleUrls: ['./slot-actions.component.css']
})
export class SlotActionsComponent implements OnInit {
  public menuIsDisplayed = true;
  public isHouseBtnPressed = false;
  public isBuildingBtnPressed = false;
  public isShopBtnPressed = false;
  public isMarkBtnPressed = false;
  public isServiceBtnPressed = false;

  constructHouse = () => {
    this.menuIsDisplayed = !this.menuIsDisplayed;
    this.isHouseBtnPressed = !this.isHouseBtnPressed;
   }

   constructBuilding = () => {
    this.menuIsDisplayed = !this.menuIsDisplayed;
    this.isBuildingBtnPressed = !this.isBuildingBtnPressed;
   }

   constructShop = () => {
    this.menuIsDisplayed = !this.menuIsDisplayed;
    this.isShopBtnPressed = !this.isShopBtnPressed;
   }

   constructMark = () => {
    this.menuIsDisplayed = !this.menuIsDisplayed;
    this.isMarkBtnPressed = !this.isMarkBtnPressed;
   }

   constructService = () => {
    this.menuIsDisplayed = !this.menuIsDisplayed;
    this.isServiceBtnPressed = !this.isServiceBtnPressed;
   }

  public slotActions = [
    {
      name:"House",
      icon:"construct_house",
      btnMethod: this.constructHouse
    },
    {
      name:"Building",
      icon:"construct_building",
      btnMethod: this.constructBuilding
    },
    {
      name:"Shop",
      icon:"construct_shop",
      btnMethod: this.constructShop
    },
    {
      name:"Mark",
      icon:"construct_mark",
      btnMethod: this.constructMark
    },
    {
      name:"Service",
      icon:"construct_service",
      btnMethod: this.constructService
    },
  ]

  constructor() { }

  ngOnInit() {
  }
  
}
