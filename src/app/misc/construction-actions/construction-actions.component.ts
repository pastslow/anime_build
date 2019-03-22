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
    this._logicService.castSlotId.subscribe(
      slotId => this.slotNumber = slotId);

    this._logicService.castTopSlots.subscribe(
      gameTopSlots => this.topSlots = gameTopSlots);

    this._logicService.castMidSlots.subscribe(
      gameMidSlots => this.midSlots = gameMidSlots);

    this._logicService.castBottomSlots.subscribe(
      gameBottomSlots => this.bottomSlots = gameBottomSlots);

    this._logicService.cast.subscribe(
      gameDataValues => this.gameValues = gameDataValues);

    this.slotActions = this._logicService.slotActions();

    this.allGameSlots = this.topSlots.concat(this.midSlots, this.bottomSlots);

    this._logicService.castSlotDetails.subscribe(
      slotDetails => this.slotNeedRepair = slotDetails);
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

  performDemolishBuilding() {

    let gameObject = this.allGameSlots.find(
      elem => elem.number == this.slotNumber);

    let currentHouse = gameObject.img.slice(0, 7);

    if (gameObject.condition === "underConstruction") {
      this._logicService.displayError(
        "This building is under construction. You can not demolis yet!");
      return;
    }

    if (gameObject.condition === "underDemolishing") {
      this._logicService.displayError(
        "This building is already under demolishing!");
      return;
    }

    if (gameObject.condition === "bought") {
      this._logicService.displayError(
        "You can not demolish an empty land!");
      return;
    }

    this.demolishAnimation(gameObject, currentHouse);
    demolish.play();

    this.gameValues.energy = this.gameValues.energy - gameObject.energy;
    this.gameValues.maxEnergy = (
      this.gameValues.maxEnergy - gameObject.maxEnergy);

    this.gameValues.appeal = this.gameValues.appeal - gameObject.appeal;

    // If you demolish the building and have less or more energy
    this.chanceStatusOfPowerToAllBuildings();

    if (this.gameValues.energy < this.gameValues.maxEnergy) {
      this.gameValues.income = (
        this.gameValues.incomeBeforeStopped - gameObject.income);
    }
    this.gameValues.incomeBeforeStopped = (
      this.gameValues.incomeBeforeStopped - gameObject.income);

    this.gameValues.materials = (
      this.gameValues.materials + Math.round(gameObject.cost / 150));
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
    slot.repairImg = "UPGRADE/NOUPDATE";
    slot.appealImg = "UPGRADE/NOUPDATE";
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

  demolishBuilding() {
    this.performDemolishBuilding();
  }

  upgradeValidation(gameObject, requirementObject) {

    if (gameObject.condition === "underConstruction") {
      this._logicService.displayError(
        "This building is under construction you can not upgrade it now!");
      return false;
    }

    if (gameObject.condition === "underDemolishing") {
      this._logicService.displayError(
        "This building is demolishing. You can not upgrade it!");
      return false;
    }

    if (gameObject.condition === "bought") {
      this._logicService.displayError(
        "You can not upgrade an empty land!");
      return false;
    }

    if (gameObject.buildingType === "producer" &&
      requirementObject.upgradeFolder === "ENERGY") {
      this._logicService.displayError(
        "You can not upgrade a producer building!");
      return false;
    }

    if (gameObject[requirementObject.objectImage] ===
      `UPGRADE/${requirementObject.upgradeFolder}/UPGRADE04`) {
      this._logicService.displayError(
        "This building have already maximum update.");
      return false;
    }

    if (this.gameValues.money < requirementObject.cost) {
      this._logicService.displayError(
        "You don't have enough money!");
      return false;
    }

    if (this.gameValues.materials < requirementObject.materials) {
      this._logicService.displayError("You don't have enough materials!");
      return false;
    }

    if (this.gameValues[requirementObject.tehniciansName] <
      requirementObject.tehniciansNumber) {
      this._logicService.displayError(
        `You don't have enough ${requirementObject.tehniciansName}!`);
      return false;
    }
  }

  updateEnergyStats(gameObject, image) {
    gameObject.energyUpdateImg = image;
    let newEnergyReduction = Math.round((gameObject.energy * 10) / 100)
    gameObject.energy = gameObject.energy - newEnergyReduction;
    gameObject.cost = (
      gameObject.cost + Math.round((gameObject.cost * 15) / 100));
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

  upgradeEnergyReduction() {
    let gameObject = (
      this.allGameSlots.find(elem => elem.number == this.slotNumber));

    let requirementObject = {
      cost: gameObject.cost / 2,
      materials: gameObject.cost / 80,
      tehniciansNumber: Math.round(gameObject.cost / 6000),
      tehniciansName: "engineers",
      objectImage: "energyUpdateImg",
      upgradeFolder: "ENERGY"
    }

    if (this.upgradeValidation(gameObject, requirementObject) == false) {
      return;
    }

    if (gameObject.needRepair === true) {
      this._logicService.displayError("You have to reapair it first!");
      return;
    }

    this.updateEnergyConditions(gameObject);
    this.chanceStatusOfPowerToAllBuildings();
    power_on.play();

    this.gameValues.money = (
      this.gameValues.money - requirementObject.cost);
    this.gameValues.materials = (
      this.gameValues.materials - requirementObject.materials);

    if (this.gameValues.energy <= this.gameValues.maxEnergy) {

      this.gameValues.income = this.gameValues.incomeBeforeStopped;
    }
    this.isModalClosed = true;

  }

  updateIncomeStats(gameObject, image) {
    gameObject.starUpdateImg = image;

    let newIncome = Math.round((gameObject.income * 10) / 100)
    gameObject.income = gameObject.income + newIncome;


    gameObject.cost = (
      gameObject.cost + Math.round((gameObject.cost * 10) / 100));

    this.gameValues.income = this.gameValues.income + newIncome;
    this.gameValues.incomeBeforeStopped = (
      this.gameValues.incomeBeforeStopped + newIncome);
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

  upgradeStarRating() {
    let gameObject = this.allGameSlots.find(
      elem => elem.number == this.slotNumber);

    let requirementObject = {
      cost: gameObject.cost / 2,
      materials: gameObject.cost / 100,
      tehniciansNumber: Math.round(gameObject.cost / 4000),
      tehniciansName: "workers",
      objectImage: "starUpdateImg",
      upgradeFolder: "STAR"
    }

    if (this.upgradeValidation(gameObject, requirementObject) === false) {
      return;
    }

    if (gameObject.needRepair === true) {
      this._logicService.displayError("You have to reapair it first!");
      return;
    }

    this.starRatingConditions(gameObject);

    this.gameValues.money = this.gameValues.money - requirementObject.cost;
    this.gameValues.materials = (
      this.gameValues.materials - requirementObject.materials);

    if (this.gameValues.energy > this.gameValues.maxEnergy) {

      this.gameValues.income = this.gameValues.incomeStopped;
    }

    this.isModalClosed = true;

  }

  repairBuilding() {
    if (this.gameValues.energy > this.gameValues.maxEnergy) {
      this._logicService.displayError(
        "You can not repair a building without power!");
      return;
    }

    let building = this.allGameSlots.find(
      elem => elem.number == this.slotNumber);

    let buildingRepairCost = Math.round(building.income * 10);
    let buildingWorkersRequired = Math.round(building.income / 300);
    let buildingMaterialsRequired = Math.round(building.income / 2);

    if (this.gameValues.money < buildingRepairCost) {
      this._logicService.displayError(
        "You don't have enough money!");
      return;
    }

    if (this.gameValues.workers < buildingWorkersRequired) {
      this._logicService.displayError(
        "You don't have enough workers!");
      return;
    }

    if (this.gameValues.materials < buildingMaterialsRequired) {
      this._logicService.displayError(
        "You don't have enough materials!");
      return;
    }

    this.gameValues.money = this.gameValues.money - buildingRepairCost;
    this.gameValues.materials = (
      this.gameValues.materials - buildingMaterialsRequired);

    building.needRepair = false;

    this.gameValues.income = this.gameValues.income + building.income;
    this.gameValues.incomeBeforeStopped = (
      this.gameValues.incomeBeforeStopped + building.income);
    building.repairImg = "UPGRADE/NOUPDATE";
    this.isModalClosed = true;

    building.income = building.income * 2;
  }


  actionCost(cost, number){
   let actionCost =  this.allGameSlots[this.slotNumber][cost] / number;
   return actionCost;
  }

}
