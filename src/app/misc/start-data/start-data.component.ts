import { Component, OnInit } from '@angular/core';
import { LogicService } from 'src/app/logic.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-start-data',
  templateUrl: './start-data.component.html',
  styleUrls: ['./start-data.component.css']
})
export class StartDataComponent implements OnInit {
  public displayState;

  public gameData;
  public topSlots;
  public midSlots;
  public bottomSlots;
  public characterSelectedId;

  constructor(private _logicService: LogicService) {
    this._logicService.castDisplayState.subscribe(
      displayStateObj => this.displayState = displayStateObj);

    this._logicService.cast.subscribe(
      gameValues => this.gameData = gameValues);

    this._logicService.castTopSlots.subscribe(
      gameTopSlots => this.topSlots = gameTopSlots);

    this._logicService.castMidSlots.subscribe(
      gameMidSlots => this.midSlots = gameMidSlots);

    this._logicService.castBottomSlots.subscribe(
      gameBottomSlots => this.bottomSlots = gameBottomSlots);

    this._logicService.castCharacterId.subscribe(
      characterId => this.characterSelectedId = characterId);
  }

  ngOnInit() {
  }

  startGame() {
    this.displayState.isMenuDisplayed = false;
  }

  loadGame() {
    
    let gameData = JSON.parse(localStorage.getItem("GAMEDATA"));
    if(gameData === null){
      alert("You have nothing to load");
      return;
    }
    this.displayState.isGameDisplayed = true;

    this._logicService.changeObject(gameData);

    let topSlots = JSON.parse(localStorage.getItem("TOPSLOTS"));
    this._logicService.getSlots(topSlots);

    let midSlots = JSON.parse(localStorage.getItem("MIDSLOTS"));
    this._logicService.getMidSlots(midSlots);

    let bottomSlots = JSON.parse(localStorage.getItem("BOTTOMSLOTS"));
    this._logicService.getBottomSlots(bottomSlots);

    let characterId = JSON.parse(localStorage.getItem("CHARID"))
    this._logicService.getSelectedCharacterId(parseInt(characterId));

  }

}
