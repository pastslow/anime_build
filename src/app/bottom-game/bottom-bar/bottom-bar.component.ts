import { Component, OnInit } from '@angular/core';
import { LogicService } from 'src/app/logic.service';
import { JsonPipe } from '@angular/common';
import { btnClick } from '../../misc/const';
import { GameSlotsService } from 'src/app/game-slots.service';
import { GameCharactersService } from 'src/app/game-characters.service';

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
  public isSettingsPressed = false;

  public isGameSaving = false;

  public bottomValues;

  public topSlots;
  public midSlots;
  public bottomSlots;
  public characterId;
  public gameCharacters;

  public allGameSlots;
  public gameTime;

  constructor(private _logicService: LogicService,
     private _slotsService:GameSlotsService,
     private _charactersService: GameCharactersService) {
    this._logicService.cast.subscribe(
      gameValues => this.bottomValues = gameValues);

    this._slotsService.castTopSlots.subscribe(
      gameTopSlots => this.topSlots = gameTopSlots);

    this._slotsService.castMidSlots.subscribe(
      gameMidSlots => this.midSlots = gameMidSlots);

    this._slotsService.castBottomSlots.subscribe(
      gameBottomSlots => this.bottomSlots = gameBottomSlots);

    this._charactersService.castCharacterId.subscribe(
      characterId => this.characterId = characterId);

    this.allGameSlots = this.topSlots.concat(this.midSlots, this.bottomSlots);

    this._charactersService.castCharacters.subscribe(
      gameCharacters => this.gameCharacters = gameCharacters);

    this._logicService.castGameTime.subscribe(
      stopWatchObj => this.gameTime = stopWatchObj);
  }

  ngOnInit() {
    this.saveGameOverInterval();
  }

  modalInfo(title) {
    btnClick.play();
    this.isMoneyPressed = false;
    this.isMaterialsPressed = false;
    this.isSettingsPressed = false;

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

    if (title == "Settings") {
      this.modalName = "GAME SETTINGS";
      this.isSettingsPressed = true;
      return;
    }

  }

  saveValidation(condition) {
    let conditionState = (
      this.allGameSlots.find(elem => elem.condition == condition));
    if (conditionState !== undefined) {
      return true;
    }
  }

  saveGame() {
    if (this.saveValidation("underDemolishing") === true) {
      return;
    }
    if (this.saveValidation("underConstruction") === true) {
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

    let characters = JSON.stringify(this.gameCharacters);
    localStorage.setItem("CHARACTERS", characters);

    let gameTimes = JSON.stringify(this.gameTime);
    localStorage.setItem("GAMETIME", gameTimes);

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
