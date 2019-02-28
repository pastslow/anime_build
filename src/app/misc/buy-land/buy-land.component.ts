import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LogicService } from 'src/app/logic.service';

@Component({
  selector: 'app-buy-land',
  templateUrl: './buy-land.component.html',
  styleUrls: ['./buy-land.component.css']
})
export class BuyLandComponent implements OnInit,OnChanges {

  @Input() parentSlot;

  public mapSlots;
  public gameData;

  constructor(private _logicService:LogicService) {

    this._logicService.castTopSlots.subscribe(mapTopSlots => this.mapSlots = mapTopSlots);
    
  }
  
  ngOnInit() {
    this._logicService.cast.subscribe(gameValues => this.gameData = gameValues);
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  buyLand(){

    if(this.gameData.money < this.gameData.landCost){
      alert("you don't have enough money");
      return;
    }

    this.gameData.money = this.gameData.money - this.gameData.landCost;
    
    let landNumber = parseInt(this.parentSlot)
    let newArr = this.mapSlots.find(elem => elem.number == landNumber)
    newArr.img = "house0/none1";
    newArr.condition = "bought";

  }

}
