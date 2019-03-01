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
  public returnToMenu = true;
  public constructionArr = [];
  public constructArr;
  public gameData;

  public topSlots;
  public midSlots;
  public bottomSlots;

  public isModalClosed = false;

  constructor(private _logicService: LogicService) {
    this._logicService.castSlotId.subscribe(slotId => this.slotIdNumber = slotId);

    this._logicService.cast.subscribe(gameValues => this.gameData = gameValues);

    this._logicService.castTopSlots.subscribe(gameTopSlots => this.topSlots = gameTopSlots);

    this._logicService.castMidSlots.subscribe(gameMidSlots => this.midSlots = gameMidSlots);

    this._logicService.castBottomSlots.subscribe(gameBottomSlots => this.bottomSlots = gameBottomSlots);

  }

  ngOnChanges(changes: SimpleChanges) {
    this.constructionArr = this._logicService.slotActions();
    this.constructArr = this.constructionArr.find(elem => elem.name == this.btnPressed.buttonNamePressed);
  }

  constructBuildingOverTime(gameObject, image, workers, energy){
    setTimeout(() => {
      gameObject.condition = "build";
      gameObject.img = `${image}/CONSTRUCT/CONSTRUCT01`;
    }, 50);
    setTimeout(() => {
      gameObject.img = `${image}/CONSTRUCT/CONSTRUCT02`;
    }, 3000);
    setTimeout(() => {
      gameObject.img = `${image}/CONSTRUCT/CONSTRUCT03`;
    }, 5000);
    setTimeout(() => {
      gameObject.img = `${image}/CONSTRUCT/CONSTRUCT04`;
    }, 7000);
    setTimeout(() => {
      gameObject.img = `${image}/CONSTRUCT/CONSTRUCT05`;
    }, 9000);
    setTimeout(() => {
      gameObject.img = `${image}/CONSTRUCT/CONSTRUCT06`;
    }, 11000);
    setTimeout(() => {
      gameObject.img = `${image}/CONSTRUCT/CONSTRUCT07`;
    }, 13000);
    setTimeout(() => {
      gameObject.img = `${image}/CONSTRUCT/CONSTRUCT08`;
    }, 15000);
    setTimeout(() => {
      this.gameData.workers = this.gameData.workers + workers;
      this.gameData.energy = this.gameData.energy + energy;
    }, 15020);
  }

  buildPurchasedBuilding(buildingCost, buildingWorkers, buildingMaterials, buildingEnergy, buildingImg) {
    this.isModalClosed = false;
    let buildCost = parseInt(buildingCost);
    let buildWorkers = parseInt(buildingWorkers);
    let buildMaterials = parseInt(buildingMaterials);
    let buildEnergy = parseInt(buildingEnergy);
    let buildImg = buildingImg.slot;

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
    this.gameData.money = this.gameData.money - buildCost;
    this.gameData.workers = this.gameData.workers - buildWorkers;
    this.gameData.buildMaterials = this.gameData.materials - buildMaterials;


    this.isModalClosed = true;
    if (slotId <= 4) {
      let newObj = this.topSlots.find(elem => elem.number == slotId);
      this.constructBuildingOverTime(newObj, buildImg, buildWorkers, buildEnergy);
   
      return;
    }

    if (slotId <= 9) {
      let newObj = this.midSlots.find(elem => elem.number == slotId);
      this.constructBuildingOverTime(newObj, buildImg, buildWorkers, buildEnergy);
      return;
    }

    if (slotId <= 14) {
      let newObj = this.bottomSlots.find(elem => elem.number == slotId);
      this.constructBuildingOverTime(newObj, buildImg, buildWorkers, buildEnergy);
      return;
    }
    
  }


}
