import { Component, OnInit } from '@angular/core';
import { LogicService } from 'src/app/logic.service';

@Component({
  selector: 'app-buy-land',
  templateUrl: './buy-land.component.html',
  styleUrls: ['./buy-land.component.css']
})
export class BuyLandComponent implements OnInit {

  public obj;


  public isModalClosed = false;
  public topSlots;
  public midSlots;
  public bottomSlots;
  public allGameSlots;
  public gameData;
  public slotNumberId;

  constructor(private _logicService: LogicService) {
    this._logicService.castSlotId.subscribe(slotId => this.slotNumberId = slotId);

    this._logicService.castTopSlots.subscribe(mapTopSlots => this.topSlots = mapTopSlots);

    this._logicService.castMidSlots.subscribe(mapMidSlots => this.midSlots = mapMidSlots);

    this._logicService.castBottomSlots.subscribe(mapBottomSlots => this.bottomSlots = mapBottomSlots);

    this.allGameSlots = this.topSlots.concat(this.midSlots, this.bottomSlots);
  }

  ngOnInit() {
    this._logicService.cast.subscribe(gameValues => this.gameData = gameValues);
  }

  buyLand() {
    let landCost = (this.gameData.landCost - this.gameData.appeal*50);
    if (this.gameData.money < landCost) {
      alert("you don't have enough money");
      return;
    }

    this.gameData.money = this.gameData.money - landCost;

    this.isModalClosed = true;

    let landNumber = this.slotNumberId;
    
      this.obj = this.allGameSlots.find(elem => elem.number == landNumber);
      this.obj.img = "HOUSE0/NONE1";
      this.obj.condition = "bought";

  }

}
