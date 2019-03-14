import { Component, OnInit } from '@angular/core';
import { LogicService } from 'src/app/logic.service';
import { JsonPipe } from '@angular/common';
import {btnClick}from '../../misc/const';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent implements OnInit {


  public btnValue = 2; // To improve (magic number)//

  public modalName;
  public isMoneyPressed = false;
  public isMaterialsPressed = false;
  public isGameSaving = false;

  public bottomValues;

  public topSlots;
  public midSlots;
  public bottomSlots;
  public characterId;

  public allGameSlots;

  constructor(private _logicService: LogicService) {
    this._logicService.cast.subscribe(
      gameValues => this.bottomValues = gameValues);

    this._logicService.castTopSlots.subscribe(
      gameTopSlots => this.topSlots = gameTopSlots);

    this._logicService.castMidSlots.subscribe(
      gameMidSlots => this.midSlots = gameMidSlots);

    this._logicService.castBottomSlots.subscribe(
      gameBottomSlots => this.bottomSlots = gameBottomSlots);

    this._logicService.castCharacterId.subscribe(
      characterId => this.characterId = characterId);

    this.allGameSlots = this.topSlots.concat(this.midSlots, this.bottomSlots);
  }

  ngOnInit() {
    this.saveGameOverInterval();
  }

  modalInfo(title) {
    btnClick.play();
    this.isMoneyPressed = false;
    this.isMaterialsPressed = false;

    if (title == "Money") {
      this.modalName = "MONEY & GOALS";
      this.isMoneyPressed = true;
      return;
    }

    if (title == "Materials") {
      this.modalName = "GET MATERIALS";
      this.btnValue = 0;
      this.isMaterialsPressed = true;
      return;
    }

    if (title == "Workers") {
      this.modalName = "HIRE WORKERS";
      this.btnValue = 1;
      this.isMaterialsPressed = true;
      return;
    }

    if (title == "Engineers") {
      this.modalName = "HIRE ENGINEERS";
      this.btnValue = 2;
      this.isMaterialsPressed = true;
      return;
    }

  }

  saveValidation(condition) {
    let conditionState = this.allGameSlots.find(elem => elem.condition == condition);
    if (conditionState !== undefined){
      return true;
    }
  }

  saveGame() {
    if(this.saveValidation("underDemolishing") === true){
      return;
    }
    if(this.saveValidation("underConstruction") === true){
      return;
    }
    
    let gameData = JSON.stringify(this.bottomValues);
    localStorage.setItem("GAMEDATA", gameData);

    let gameTopSlots = JSON.stringify(this.topSlots);
    localStorage.setItem("TOPSLOTS", gameTopSlots);

    let gameMidSlots = JSON.stringify(this.midSlots);
    localStorage.setItem("MIDSLOTS", gameMidSlots);

    let gameBottomSlots = JSON.stringify(this.bottomSlots);
    localStorage.setItem("BOTTOMSLOTS", gameBottomSlots);

    localStorage.setItem("CHARID", this.characterId);
    console.log("game saved");
    this.isGameSaving = true;
    setTimeout(() => {
      this.isGameSaving = false;
    }, 1500);
  }

  public saveGameOverInterval() {
    setInterval(() => {
      this.saveGame();
    }, 10000);
  }
}
