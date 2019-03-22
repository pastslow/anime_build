import { Component, OnInit, Input } from '@angular/core';
import { LogicService } from 'src/app/logic.service';

@Component({
  selector: 'app-materials-section',
  templateUrl: './materials-section.component.html',
  styleUrls: ['./materials-section.component.css']
})
export class MaterialsSectionComponent implements OnInit {

  @Input() public btnPressed;

  public bottomDataValues = [];

  public bottomValues;
  public gameDataValues;

  constructor(private _logicService: LogicService) { }

  ngOnInit() {
    this._logicService.cast.subscribe(
      gameValues => this.bottomValues = gameValues);

    this.bottomDataValues = this._logicService.bottomLogicData();

  }

  public defaultClass = true;
  public isNotDisplayed = false;
  public isDisabled = false;
  public isLoading = false;

  getPackFromShop(item, pack) {
    let procent = (
      Math.round((pack * this.bottomValues.bonusGameResources) / 100));
    this.bottomValues[item] = this.bottomValues[item] + pack + procent;
  }

  buyItems(title, slotNumber) {
    let slotObject = this.bottomDataValues.find(elem => elem.title == title);
    let slotId = parseInt(slotNumber.slot);

    let selectedItem = slotObject.shopItems.find(elem => elem.id == slotId);
    let newPack = selectedItem.number;

    let selectedPackCost = (selectedItem.cost - (selectedItem.cost *
      (this.bottomValues.appeal / 10)) / 100);

    if (selectedPackCost > this.bottomValues.money) {
      this._logicService.displayError(" You don't have enough money!");
      return;
    }
    // Actualizing money
    this.bottomValues.money = this.bottomValues.money - selectedPackCost;

    // Produce the change on the observable object
    this._logicService.changeObject(this.bottomValues);

    this.isLoading = true;
    this.isDisabled = true;
    this.isNotDisplayed = false;

    setTimeout(() => {
      // Actualizing what have u bought
      if (title === "Buying Materials") {
        this.getPackFromShop("materials", newPack);
      }
      if (title === "Hire Workers") {
        this.getPackFromShop("workers", newPack);
      }
      if (title === "Hire Engineers") {
        this.getPackFromShop("engineers", newPack);
      }
      //Hide loading bar
      this.isLoading = false;
      this.isNotDisplayed = true;
      this.isDisabled = false;
    }, 2100);

  }

  materialsCost(pack) {
    let packCost = pack.cost - (
      pack.cost * (this.bottomValues.appeal / 10)) / 100;
    return packCost;
  }

  materialsPcs(pack) {
    let materialPcs = pack.number + (
      pack.number * this.bottomValues.bonusGameResources) / 100;
    return materialPcs;
  }


}
