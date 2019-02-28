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

  constructor(private _logicService: LogicService) { }

  ngOnInit() {
    this._logicService.cast.subscribe(gameValues => this.bottomValues = gameValues)

    this.bottomDataValues = this._logicService.bottomLogicData();
  }

  public defaultClass = true;
  public isNotDisplayed = false;
  public isDisabled = false;
  public isLoading = false;

  getPackFromShop(item, pack) {
    this.bottomValues[item] = this.bottomValues[item] + pack;
  }

  buyItems(cost, title, pack) {

    if (parseInt(cost) > this.bottomValues.money) {
      alert(" You don't have enough money!!!");
      return;
    }

    // Convert value of pack to number
    let newPack = parseInt(pack)
    // Actualizing money
    let newMoney = this.bottomValues.money - parseInt(cost);
    this.bottomValues.money = newMoney;
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


}
