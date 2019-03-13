import { Component, OnInit, Input } from '@angular/core';
import { LogicService } from 'src/app/logic.service';
import { demolish, power_on } from '../const';

@Component({
  selector: 'app-construction-actions',
  templateUrl: './construction-actions.component.html',
  styleUrls: ['./construction-actions.component.css']
})
export class ConstructionActionsComponent implements OnInit {
  public isModalClosed = false;

  public slotNeedRepair;

  @Input() public isSupportingEngUpgrade;

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

    this._logicService.castSlotDetails.subscribe(slotDetails => this.slotNeedRepair = slotDetails);
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

    if (gameObject.condition === "bought") {
      alert("You can not demolish a empty land")
      return;
    }

    this.demolishAnimation(gameObject, currentHouse);
    demolish.play();
    
    this.gameValues.energy = this.gameValues.energy - gameObject.energy;
    this.gameValues.maxEnergy = this.gameValues.maxEnergy - gameObject.maxEnergy;

    this.gameValues.appeal = this.gameValues.appeal - gameObject.appeal;
   
    // If you demolish the building and have less or more energy
    this.chanceStatusOfPowerToAllBuildings();
    
    if(this.gameValues.energy < this.gameValues.maxEnergy){
      this.gameValues.income = this.gameValues.incomeBeforeStopped - gameObject.income;
    }
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
    slot.appeal = 0;
    slot.energyUpdateImg = "UPGRADE/NOUPDATE";
    slot.starUpdateImg = "UPGRADE/NOUPDATE";
    slot.needRepair = false;
    slot.buildingType = "consumer";
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

  updateValidation(gameObject, requirementObject) {

    if (gameObject.condition === "underConstruction") {
      alert("This building is underconstruction you can not upgrade now");
      return false;
    }

    if (gameObject.condition === "underDemolishing") {
      alert("This building is demolishing. You can not upgrade it");
      return false;
    }

    if (gameObject.condition === "bought") {
      alert("You can not upgrade an empty land");
      return false;
    }

    if (gameObject.buildingType === "producer" && requirementObject.upgradeFolder === "ENERGY") {
      alert("You can not upgrade a producer building");
      return false;
    }

    if (gameObject[requirementObject.objectImage] === `UPGRADE/${requirementObject.upgradeFolder}/UPGRADE04`) {
      alert("This building have already maximum update.")
      return false;
    }

    if (this.gameValues.money < requirementObject.cost) {
      alert("You don't have enough money");
      return false;
    }

    if (this.gameValues.materials < requirementObject.materials) {
      alert("You don't have enough materials");
      return false;
    }

    if (this.gameValues[requirementObject.tehniciansName] < requirementObject.tehniciansNumber) {
      alert(`You don't have enough ${requirementObject.tehniciansName}`);
      return false;
    }
  }

  updateEnergyStats(gameObject, image) {
    gameObject.energyUpdateImg = image;
    let newEnergyReduction = Math.round((gameObject.energy * 10) / 100)
    gameObject.energy = gameObject.energy - newEnergyReduction;
    gameObject.cost = gameObject.cost + Math.round((gameObject.cost * 15) / 100);
    this.gameValues.energy = this.gameValues.energy - newEnergyReduction;

  }

  updateEnergyConditions(buildingObject) {
    if (buildingObject.energyUpdateImg === "UPGRADE/NOUPDATE") {
      this.updateEnergyStats(buildingObject, "UPGRADE/ENERGY/UPGRADE01");
      return;
    }
    if (buildingObject.energyUpdateImg === "UPGRADE/ENERGY/UPGRADE01") {
      this.updateEnergyStats(buildingObject, "UPGRADE/ENERGY/UPGRADE02");
      return;
    }
    if (buildingObject.energyUpdateImg === "UPGRADE/ENERGY/UPGRADE02") {
      this.updateEnergyStats(buildingObject, "UPGRADE/ENERGY/UPGRADE03");
      return;
    }
    if (buildingObject.energyUpdateImg === "UPGRADE/ENERGY/UPGRADE03") {
      this.updateEnergyStats(buildingObject, "UPGRADE/ENERGY/UPGRADE04");
      return;
    }

  }

  updateEnergyReduction(cost, materials, engineers) {
    let gameObject = this.allGameSlots.find(elem => elem.number == this.slotNumber);

    let requirementObject = {
      cost: parseInt(cost),
      materials: parseInt(materials),
      tehniciansNumber: parseInt(engineers),
      tehniciansName: "engineers",
      objectImage: "energyUpdateImg",
      upgradeFolder: "ENERGY"
    }

    if (this.updateValidation(gameObject, requirementObject) == false) {
      return;
    }

    this.updateEnergyConditions(gameObject);
    this.chanceStatusOfPowerToAllBuildings();
    power_on.play();

    this.gameValues.money = this.gameValues.money - requirementObject.cost;
    this.gameValues.materials = this.gameValues.materials - requirementObject.materials;

    if (this.gameValues.energy <= this.gameValues.maxEnergy) {

      this.gameValues.income = this.gameValues.incomeBeforeStopped;
    }
    this.isModalClosed = true;

  }

  updateIncomeStats(gameObject, image) {
    gameObject.starUpdateImg = image;

    let newIncome = Math.round((gameObject.income * 10) / 100)
    gameObject.income = gameObject.income + newIncome;


    gameObject.cost = gameObject.cost + Math.round((gameObject.cost * 10) / 100);

    this.gameValues.income = this.gameValues.income + newIncome;
    this.gameValues.incomeBeforeStopped = this.gameValues.incomeBeforeStopped + newIncome;
  }

  starRatingConditions(buildingObject) {
    if (buildingObject.starUpdateImg === "UPGRADE/NOUPDATE") {
      this.updateIncomeStats(buildingObject, "UPGRADE/STAR/UPGRADE01");
      return;
    }
    if (buildingObject.starUpdateImg === "UPGRADE/STAR/UPGRADE01") {
      this.updateIncomeStats(buildingObject, "UPGRADE/STAR/UPGRADE02");
      return;
    }
    if (buildingObject.starUpdateImg === "UPGRADE/STAR/UPGRADE02") {
      this.updateIncomeStats(buildingObject, "UPGRADE/STAR/UPGRADE03");
      return;
    }
    if (buildingObject.starUpdateImg === "UPGRADE/STAR/UPGRADE03") {
      this.updateIncomeStats(buildingObject, "UPGRADE/STAR/UPGRADE04");
      return;
    }

  }

  updateStarRating(cost, materials, workers) {
    let gameObject = this.allGameSlots.find(elem => elem.number == this.slotNumber)

    let requirementObject = {
      cost: parseInt(cost),
      materials: parseInt(materials),
      tehniciansNumber: parseInt(workers),
      tehniciansName: "workers",
      objectImage: "starUpdateImg",
      upgradeFolder: "STAR"
    }

    if (this.updateValidation(gameObject, requirementObject) === false) {
      return;
    }

    this.starRatingConditions(gameObject);

    this.gameValues.money = this.gameValues.money - requirementObject.cost;
    this.gameValues.materials = this.gameValues.materials - requirementObject.materials;

    if (this.gameValues.energy > this.gameValues.maxEnergy) {

      this.gameValues.income = this.gameValues.incomeStopped;
    }

    this.isModalClosed = true;

  }



}
