import { Component, OnInit } from '@angular/core';
import { LogicService } from 'src/app/logic.service';

@Component({
  selector: 'app-construction-actions',
  templateUrl: './construction-actions.component.html',
  styleUrls: ['./construction-actions.component.css']
})
export class ConstructionActionsComponent implements OnInit {
  public isModalClosed = false;

  public slotNumber;

  public topSlots;
  public midSlots;
  public bottomSlots;

  public gameValues;

  public slotActions;

  constructor(private _logicService: LogicService) {
    this._logicService.castSlotId.subscribe(slotId => this.slotNumber = slotId);

    this._logicService.castTopSlots.subscribe(gameTopSlots => this.topSlots = gameTopSlots);

    this._logicService.castMidSlots.subscribe(gameMidSlots => this.midSlots = gameMidSlots);

    this._logicService.castBottomSlots.subscribe(gameBottomSlots => this.bottomSlots = gameBottomSlots);

    this._logicService.cast.subscribe(gameDataValues => this.gameValues = gameDataValues);

    this.slotActions = this._logicService.slotActions();
  }

  ngOnInit() {
  }

  changePowerOfBuildings(array, image){
    for (let i = 0; i < array.length; i++) {
      if (array[i].condition === "build") {
        let arrSlots = array[i].img.slice(0, 18);
        array[i].img = arrSlots.concat(image);
      }
    }
  }

  performDemolishBuilding(gameSlot){
    let gameObject = gameSlot.find(elem => elem.number == this.slotNumber);
    if (gameObject.condition !== "build") {
      alert("This building is under construction. You can not demolis yet")
      return;
    }

    gameObject.img = "HOUSE0/NONE1";
    gameObject.condition = "bought";

    this.gameValues.energy = this.gameValues.energy - gameObject.energy;
    this.gameValues.maxEnergy = this.gameValues.maxEnergy - gameObject.maxEnergy;

    // If you demolish the building and have less or more energy
    if (this.gameValues.energy > this.gameValues.maxEnergy) {
      this.changePowerOfBuildings(this.topSlots, "NONE00");
      this.changePowerOfBuildings(this.midSlots, "NONE00");
      this.changePowerOfBuildings(this.bottomSlots, "NONE00");
      this.gameValues.income = this.gameValues.incomeStopped;
    } else {
    this.changePowerOfBuildings(this.topSlots, "CONSTRUCT08");
    this.changePowerOfBuildings(this.midSlots, "CONSTRUCT08");
    this.changePowerOfBuildings(this.bottomSlots, "CONSTRUCT08");

    this.gameValues.income = this.gameValues.incomeBeforeStopped - gameObject.income;
    this.gameValues.incomeBeforeStopped = this.gameValues.incomeBeforeStopped - gameObject.income;
    this._logicService.changeObject(this.gameValues);
    this.isModalClosed = true;
    this.resetSlotData(gameObject);
    }
  }

  resetSlotData(slot){
      slot.income = 0;
      slot.maxEnergy = 0;
      slot.energy = 0;
  }

  demolishBuilding() {
    if (this.slotNumber <= 4) {
      this.performDemolishBuilding(this.topSlots);
      return;
    }
    if (this.slotNumber <= 9) {
      this.performDemolishBuilding(this.midSlots);
      return;
    }
    if (this.slotNumber <= 14) {
      this.performDemolishBuilding(this.bottomSlots);
      return;
    }
  }

}
