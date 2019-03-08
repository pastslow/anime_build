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

  public allGameSlots;

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

    this.allGameSlots = this.topSlots.concat(this.midSlots, this.bottomSlots);
    
  }

  ngOnChanges(changes: SimpleChanges) {
    this.constructionArr = this._logicService.slotActions();
    this.constructArr = this.constructionArr.find(
      elem => elem.name == this.btnPressed.buttonNamePressed);
  }

  changeImageOfSlot(gameObject, requireObject) {
    gameObject.condition = "underConstruction";
    for (let i = 1; i <= 8; i++) {
      let timeout = i === 1 ? 50 : (i - 1) * 1800;
      setTimeout(() => {
        gameObject.img = `${requireObject.buildImg}/CONSTRUCT/CONSTRUCT0${i}`;
      }, timeout);
    }
  }

  changeSlotEnergyBasedOnType(gameObject, requireObject){
    if (requireObject.buildType === "producer") {
      this.gameData.maxEnergy = this.gameData.maxEnergy + requireObject.buildEnergy;
      gameObject.energy = 0;
      gameObject.maxEnergy = requireObject.buildEnergy;
      gameObject.buildingType = "producer";
    } else {
      let bonusEnergyProcent = (
        this.gameData.reduceEnergyConsumption * requireObject.buildEnergy) / 100;

      this.gameData.energy = (
        this.gameData.energy + requireObject.buildEnergy - bonusEnergyProcent);

      gameObject.energy = requireObject.buildEnergy - bonusEnergyProcent;
      gameObject.buildingType = "consumer";
    }
  }

  changeGameAndSlotIncome(gameObject, requireObject){
    let bonusIncomeProcent = (
      this.gameData.bonusIncome * requireObject.buildIncome) / 100;

    gameObject.income = requireObject.buildIncome + bonusIncomeProcent;
    gameObject.cost = requireObject.buildIncome * 10;

    let rentalIncome = (this.gameData.income + requireObject.buildIncome +
      bonusIncomeProcent);

    let rentalIncomeBeforeStopped = (this.gameData.incomeBeforeStopped +
      requireObject.buildIncome + bonusIncomeProcent)

    this.gameData.income = rentalIncome;
    this.gameData.incomeBeforeStopped = rentalIncomeBeforeStopped;
    gameObject.condition = "build";
  }

  constructBuildingOverTime(gameObject, requireObject) {

    this.changeImageOfSlot(gameObject, requireObject);

    setTimeout(() => {
      this.gameData.workers = this.gameData.workers + requireObject.buildWorkers;

      this.changeSlotEnergyBasedOnType(gameObject, requireObject);

      this.changeGameAndSlotIncome(gameObject, requireObject);

      this.changeBuildingStatus();
    }, 14500);
  }

  changeBuildingStatus() {
    if (this.gameData.energy > this.gameData.maxEnergy) {
      this.changePowerOfBuildings(this.allGameSlots, "NONE00");
      this.gameData.income = this.gameData.incomeStopped;
      return;
    }
    this.changePowerOfBuildings(this.allGameSlots, "CONSTRUCT08");
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

  buildValidation(requireObject){
    if (this.gameData.money < requireObject.buildCost) {
      alert("You don't have enough Money !!")
      return true;
    }
    if (this.gameData.workers < requireObject.buildWorkers) {
      alert("You don't have enough Workers !!")
      return true;
    }
    if (this.gameData.materials < requireObject.buildMaterials) {
      alert("You don't have enough Materials !!")
      return true;
    }
  }

  buildPurchasedBuilding(buildingName) {
    this.isModalClosed = false;

    let building = this.constructArr.construct.find(elem => elem.name == buildingName);

    let requireObject = {
      buildCost: building.cost,
      buildWorkers: building.workers,
      buildMaterials: building.materials,
      buildEnergy: building.energy,
      buildIncome: building.income,
      buildImg: building.buildingId,
      buildType: building.buildingType
    }

    let slotId = this.slotIdNumber;
    

    if (this.buildValidation(requireObject) === true) {
      return;
    }
  
    // degresse resource
    this.gameData.money = this.gameData.money - requireObject.buildCost;
    this.gameData.workers = this.gameData.workers - requireObject.buildWorkers;
    this.gameData.materials = this.gameData.materials - requireObject.buildMaterials;


    let newObj = this.allGameSlots.find(elem => elem.number == slotId);
    this.constructBuildingOverTime(newObj, requireObject);

    this.isModalClosed = true;
  }


}
