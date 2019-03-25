import { Component, OnInit } from '@angular/core';
import { LogicService } from 'src/app/logic.service';
import { btnClick } from '../const';
import { GameSlotsService } from 'src/app/game-slots.service';
import { GameCharactersService } from 'src/app/game-characters.service';


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
  public gameCharacters;
  public gameTime;

  constructor(private _logicService: LogicService,
    private _slotsService: GameSlotsService,
    private _charactersService: GameCharactersService) {
      
    this._logicService.castDisplayState.subscribe(
      displayStateObj => this.displayState = displayStateObj);

    this._logicService.cast.subscribe(
      gameValues => this.gameData = gameValues);

    this._slotsService.castTopSlots.subscribe(
      gameTopSlots => this.topSlots = gameTopSlots);

    this._slotsService.castMidSlots.subscribe(
      gameMidSlots => this.midSlots = gameMidSlots);

    this._slotsService.castBottomSlots.subscribe(
      gameBottomSlots => this.bottomSlots = gameBottomSlots);

    this._charactersService.castCharacterId.subscribe(
      characterId => this.characterSelectedId = characterId);

    this._charactersService.castCharacters.subscribe(
      gameCharacters => this.gameCharacters = gameCharacters);

    this._logicService.castGameTime.subscribe(
      stopWatchObj => this.gameTime = stopWatchObj);
  }

  ngOnInit() {
  }

  startGame() {
    btnClick.play();
    this.displayState.isMenuDisplayed = false;
  }


  loadGame() {
    btnClick.play();

    let gameData = JSON.parse(localStorage.getItem("GAMEDATA"));
    if (gameData === null) {
      this._logicService.displayError("You have nothing to load!");
      return;
    }

    this.displayState.isGameDisplayed = true;

    this._logicService.changeObject(gameData);

    let topSlots = JSON.parse(localStorage.getItem("TOPSLOTS"));
    this._slotsService.getSlots(topSlots);

    let midSlots = JSON.parse(localStorage.getItem("MIDSLOTS"));
    this._slotsService.getMidSlots(midSlots);

    let bottomSlots = JSON.parse(localStorage.getItem("BOTTOMSLOTS"));
    this._slotsService.getBottomSlots(bottomSlots);

    let characters = JSON.parse(localStorage.getItem("CHARACTERS"));
    this._charactersService.getCharacters(characters);

    let characterId = JSON.parse(localStorage.getItem("CHARID"));
    this._charactersService.getSelectedCharacterId(parseInt(characterId));

    let gameTimes = JSON.parse(localStorage.getItem("GAMETIME"));
    this._logicService.getStopWatchTime(gameTimes);

    let bonusIncome = this.gameCharacters[characterId].bonuses.find(
      elem => elem.name == "Gold");
    let bonusPower = this.gameCharacters[characterId].bonuses.find(
      elem => elem.name == "Power");
    let bonusGameResource = this.gameCharacters[characterId].bonuses.find(
      elem => elem.name == "Resources");

    gameData.bonusIncome = bonusIncome.value;
    gameData.reduceEnergyConsumption = bonusPower.value;
    gameData.bonusGameResources = bonusGameResource.value;
  }


}
