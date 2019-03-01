import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LogicService } from 'src/app/logic.service';

@Component({
  selector: 'app-buy-land',
  templateUrl: './buy-land.component.html',
  styleUrls: ['./buy-land.component.css']
})
export class BuyLandComponent implements OnInit, OnChanges {

  @Input() parentSlot;

  public obj;

  public topSlots;
  public midSlots;
  public bottomSlots;
  public gameData;

  constructor(private _logicService: LogicService) {

    this._logicService.castTopSlots.subscribe(mapTopSlots => this.topSlots = mapTopSlots);
    this._logicService.castMidSlots.subscribe(mapMidSlots => this.midSlots = mapMidSlots);
    this._logicService.castBottomSlots.subscribe(mapBottomSlots => this.bottomSlots = mapBottomSlots);

  }

  ngOnInit() {
    this._logicService.cast.subscribe(gameValues => this.gameData = gameValues);
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  buyLand() {

    if (this.gameData.money < this.gameData.landCost) {
      alert("you don't have enough money");
      return;
    }

    this.gameData.money = this.gameData.money - this.gameData.landCost;

    let landNumber = parseInt(this.parentSlot)
    if (landNumber <= 4) {
      this.obj = this.topSlots.find(elem => elem.number == landNumber);
      this.obj.img = "house0/none1";
      this.obj.condition = "bought";
      return
    }
    if (landNumber <= 9) {
      this.obj = this.midSlots.find(elem => elem.number == landNumber);
      this.obj.img = "house0/none1";
      this.obj.condition = "bought";
      return;
    }
    if (landNumber <= 14) {
      this.obj = this.bottomSlots.find(elem => elem.number == landNumber);
      this.obj.img = "house0/none1";
      this.obj.condition = "bought";
      return;
    }

  }

}
