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

  public allGameSlots;

  constructor(private _logicService: LogicService) {
    this._logicService.castSlotId.subscribe(slotId => this.slotNumber = slotId);

    this._logicService.castTopSlots.subscribe(gameTopSlots => this.topSlots = gameTopSlots);

    this._logicService.castMidSlots.subscribe(gameMidSlots => this.midSlots = gameMidSlots);

    this._logicService.castBottomSlots.subscribe(gameBottomSlots => this.bottomSlots = gameBottomSlots);

    this._logicService.cast.subscribe(gameDataValues => this.gameValues = gameDataValues);

    this.slotActions = this._logicService.slotActions();

    this.allGameSlots = this.topSlots.concat(this.midSlots, this.bottomSlots);
  }

  ngOnInit() {
  }

  changePowerOfBuildings(array, image) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].condition === "build") {
        let arrSlots = array[i].img.slice(0, 18);
        array[i].img = arrSlots.concat(image);
      }
    }
  }

  chanceStatusOfPowerToAllBuildings() {
    if (this.gameValues.energy > this.gameValues.maxEnergy) {
      this.changePowerOfBuildings(this.topSlots, "NONE00");
      this.changePowerOfBuildings(this.midSlots, "NONE00");
      this.changePowerOfBuildings(this.bottomSlots, "NONE00");
      this.gameValues.income = this.gameValues.incomeStopped;
    } else {
      this.changePowerOfBuildings(this.topSlots, "CONSTRUCT08");
      this.changePowerOfBuildings(this.midSlots, "CONSTRUCT08");
      this.changePowerOfBuildings(this.bottomSlots, "CONSTRUCT08");
    }
  }

  performDemolishBuilding(gameSlot, materials) {

    let gameObject = gameSlot.find(elem => elem.number == this.slotNumber);
    let currentHouse = gameObject.img.slice(0, 7);

    if (gameObject.condition === "underConstruction") {
      alert("This building is under construction. You can not demolis yet")
      return;
    }

    if (gameObject.condition === "underDemolishing") {
      alert("This building is already under demolishing")
      return;
    }

    this.demolishAnimation(gameObject, currentHouse);

    this.gameValues.energy = this.gameValues.energy - gameObject.energy;
    this.gameValues.maxEnergy = this.gameValues.maxEnergy - gameObject.maxEnergy;

    // If you demolish the building and have less or more energy
    this.chanceStatusOfPowerToAllBuildings();

    this.gameValues.income = this.gameValues.incomeBeforeStopped - gameObject.income;
    this.gameValues.incomeBeforeStopped = this.gameValues.incomeBeforeStopped - gameObject.income;

    this.gameValues.materials = this.gameValues.materials + parseInt(materials);
    this._logicService.changeObject(this.gameValues);

    this.isModalClosed = true;

    this.resetSlotData(gameObject);

  }

  resetSlotData(slot) {
    slot.income = 0;
    slot.maxEnergy = 0;
    slot.energy = 0;
    slot.energyUpdateImg = "NOUPDATE";
  }

  demolishAnimation(object, currentHouse) {
    object.condition = "underDemolishing";

    for (let i = 1; i <= 4; i++) {
      let timeout = i === 1 ? 50 : (i - 1) * 1200;
      setTimeout(() => {
        object.img = `${currentHouse}/DEMOLISH/DEMOLISH0${i}`;
      }, timeout);
    }

    setTimeout(() => {
      object.img = "HOUSE0/NONE1";
      object.condition = "bought";
    }, 4850);
  }

  demolishBuilding(materials) {
    if (this.slotNumber <= 4) {
      this.performDemolishBuilding(this.topSlots, materials);
      return;
    }
    if (this.slotNumber <= 9) {
      this.performDemolishBuilding(this.midSlots, materials);
      return;
    }
    if (this.slotNumber <= 14) {
      this.performDemolishBuilding(this.bottomSlots, materials);
      return;
    }
  }

  updateEnergyStats(gameObject, image) {
    gameObject.energyUpdateImg = image;
    let newEnergyReduction = Math.round((gameObject.energy * 10) / 100)
    gameObject.energy = gameObject.energy - newEnergyReduction;

    this.gameValues.energy = this.gameValues.energy - newEnergyReduction;

  }

  updateEnergyConditions(buildingObject) {
    if (buildingObject.energyUpdateImg === "NOUPDATE") {
      this.updateEnergyStats(buildingObject, "ENG01");
      return;
    }
    if (buildingObject.energyUpdateImg === "ENG01") {
      this.updateEnergyStats(buildingObject, "ENG02");
      return;
    }
    if (buildingObject.energyUpdateImg === "ENG02") {
      this.updateEnergyStats(buildingObject, "ENG03");
      return;
    }
    if (buildingObject.energyUpdateImg === "ENG03") {
      this.updateEnergyStats(buildingObject, "ENG04");
      return;
    }

    if (buildingObject.energyUpdateImg === "ENG04") {
      alert("This building have already maximum update at energy")
      return;
    }
  }

  updateEnergyReduction() {
    let gameObject = this.allGameSlots.find(elem => elem.number == this.slotNumber )

    debugger

    if (gameObject.condition === "underConstruction") {
      alert("You can not update this building yet");
      return;
    }

    if (gameObject.condition === "underDemolishing") {
      alert("This building is demolishing. You can not update it");
      return;
    }

    this.updateEnergyConditions(gameObject)
    this.chanceStatusOfPowerToAllBuildings();
    this.gameValues.income = this.gameValues.incomeBeforeStopped

  }
}
