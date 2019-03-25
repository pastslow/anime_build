import { Component, OnInit } from '@angular/core';
import { LogicService } from 'src/app/logic.service';
import { btnClick } from '../../misc/const';
import { GameSlotsService } from 'src/app/game-slots.service';

@Component({
  selector: 'app-buy-land',
  templateUrl: './buy-land.component.html',
  styleUrls: ['./buy-land.component.css']
})

export class BuyLandComponent implements OnInit {
  public isModalClosed = false;
  public topSlots;
  public midSlots;
  public bottomSlots;
  public allGameSlots;
  public gameData;
  public slotNumberId;

  constructor(private _logicService: LogicService,
    private _slotsService:GameSlotsService ) {
    this._slotsService.castSlotId.subscribe(
      slotId => this.slotNumberId = slotId);

    this._slotsService.castTopSlots.subscribe(
      mapTopSlots => this.topSlots = mapTopSlots);

    this._slotsService.castMidSlots.subscribe(
      mapMidSlots => this.midSlots = mapMidSlots);

    this._slotsService.castBottomSlots.subscribe(
      mapBottomSlots => this.bottomSlots = mapBottomSlots);

    this.allGameSlots = this.topSlots.concat(
      this.midSlots, this.bottomSlots);
  }

  ngOnInit() {
    this._logicService.cast.subscribe(
      gameValues => this.gameData = gameValues);
  }

  buyLand() {
    btnClick.play();
    let landCost = Math.round((this.gameData.landCost - this.gameData.appeal * 100));

    if (this.gameData.money < landCost) {
      this._logicService.displayError("You don't have enough money!");
      this.isModalClosed = true;
      return;
    }
    let appealProcent = (this.gameData.landCost * (this.gameData.appeal / 5)/200);

    this.gameData.money = this.gameData.money - landCost;
    this.gameData.landCost = (
      this.gameData.landCost + (
        this.gameData.landCost * 30) / 100) - appealProcent;

    this.isModalClosed = true;

    let landNumber = this.slotNumberId;

    let obj = this.allGameSlots.find(elem => elem.number == landNumber);
    obj.img = "HOUSE0/NONE1";
    obj.condition = "bought";
  }

  landPrice(){
   return this.gameData.landCost - this.gameData.appeal*100;
  }

}
