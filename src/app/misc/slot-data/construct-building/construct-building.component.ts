import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { LogicService } from 'src/app/logic.service';

@Component({
  selector: 'app-construct-building',
  templateUrl: './construct-building.component.html',
  styleUrls: ['./construct-building.component.css']
})
export class ConstructBuildingComponent implements OnChanges {

  @Input() public btnPressed;
  @Output() public getBack = new EventEmitter();

  getBackToMenu() {
    this.getBack.emit(this.returnToMenu);
  }

  public slotIdNumber;
  public slotDetails;
  public returnToMenu = true;
  public constructionArr = [];
  public constructArr;
  public gameData;

  public topSlots;
  public midSlots;
  public bottomSlots;

  public isModalClosed = false;

  constructor(private _logicService: LogicService) {
    this._logicService.castSlotId.subscribe(
      slotId => this.slotIdNumber = slotId);

    this._logicService.cast.subscribe(
      gameValues => this.gameData = gameValues);

    this._logicService.castTopSlots.subscribe(
      gameTopSlots => this.topSlots = gameTopSlots);

    this._logicService.castMidSlots.subscribe(
      gameMidSlots => this.midSlots = gameMidSlots);

    this._logicService.castBottomSlots.subscribe(
      gameBottomSlots => this.bottomSlots = gameBottomSlots);

  }

  ngOnChanges(changes: SimpleChanges) {
    this.constructionArr = this._logicService.slotActions();
    this.constructArr = this.constructionArr.find(
      elem => elem.name == this.btnPressed.buttonNamePressed);
  }

  constructBuildingOverTime(gameObject, image, workers,
    energy, buildingIncome, buildingType) {

    gameObject.condition = "build";

    for (let i = 1; i <= 8; i++) {
      let timeout = i === 1? 50 : (i - 1) * 1800;
      setTimeout(() => {
        gameObject.img = `${image}/CONSTRUCT/CONSTRUCT0${i}`;
      }, timeout);
    }

    setTimeout(() => {
      this.gameData.workers = this.gameData.workers + workers;
      if (buildingType === "producer") {
        this.gameData.maxEnergy = this.gameData.maxEnergy + energy;
      } else {
        let bonusEnergyProcent = (
          this.gameData.reduceEnergyConsumption * energy) / 100;

        this.gameData.energy = (
          this.gameData.energy + energy - bonusEnergyProcent);
      }

      let bonusIncomeProcent = (
        this.gameData.bonusIncome * buildingIncome) / 100;

      this.gameData.income = (
        + buildingIncome + bonusIncomeProcent);


      this.changeBuildingStatus();
    }, 14500);
  }

  changeBuildingStatus() {
    if (this.gameData.energy > this.gameData.maxEnergy) {
      this.changePowerOfBuildings(this.topSlots, "NONE00");
      this.changePowerOfBuildings(this.midSlots, "NONE00");
      this.changePowerOfBuildings(this.bottomSlots, "NONE00");
      this.gameData.income = this.gameData.incomeStopped;
      return;
    }
    this.changePowerOfBuildings(this.topSlots, "CONSTRUCT08");
    this.changePowerOfBuildings(this.midSlots, "CONSTRUCT08");
    this.changePowerOfBuildings(this.bottomSlots, "CONSTRUCT08");
    this.gameData.income = this.gameData.incomeBeforeStopped;
  }

  changePowerOfBuildings(array, image) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].condition === "build") {
        let arrSlots = array[i].img.slice(0, 18);
        array[i].img = arrSlots.concat(image);
      }
    }
  }


  buildPurchasedBuilding(buildingCost, buildingWorkers, buildingMaterials,
    buildingEnergy, buildingImg, buildingIncome, buildingType) {

    this.isModalClosed = false;

    let buildCost = parseInt(buildingCost);
    let buildWorkers = parseInt(buildingWorkers);
    let buildMaterials = parseInt(buildingMaterials);
    let buildEnergy = parseInt(buildingEnergy);
    let buildIncome = parseInt(buildingIncome);
    let buildImg = buildingImg.slot;
    let buildType = buildingType;
    let slotId = this.slotIdNumber;

    // Validation
    if (this.gameData.money < buildCost) {
      alert("You don't have enough Money !!")
      return;
    }
    if (this.gameData.workers < buildWorkers) {
      alert("You don't have enough Workers !!")
      return;
    }
    if (this.gameData.materials < buildMaterials) {
      alert("You don't have enough Materials !!")
      return;
    }
    // degresse resource
    this.gameData.money = this.gameData.money - buildCost;
    this.gameData.workers = this.gameData.workers - buildWorkers;
    this.gameData.buildMaterials = this.gameData.materials - buildMaterials;

    this.isModalClosed = true;

    if (slotId <= 4) {
      let newObj = this.topSlots.find(elem => elem.number == slotId);
      this.constructBuildingOverTime(newObj, buildImg,
        buildWorkers, buildEnergy, buildIncome, buildType);
      return;
    }

    if (slotId <= 9) {
      let newObj = this.midSlots.find(elem => elem.number == slotId);
      this.constructBuildingOverTime(newObj, buildImg,
        buildWorkers, buildEnergy, buildIncome, buildType);
      return;
    }

    if (slotId <= 14) {
      let newObj = this.bottomSlots.find(elem => elem.number == slotId);
      this.constructBuildingOverTime(newObj, buildImg,
        buildWorkers, buildEnergy, buildIncome, buildType);
      return;
    }

  }


}
