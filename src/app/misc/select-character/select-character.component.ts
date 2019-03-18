import { Component, OnInit } from '@angular/core';
import { LogicService } from 'src/app/logic.service';
import { btnClick } from '../../misc/const';

@Component({
  selector: 'app-select-character',
  templateUrl: './select-character.component.html',
  styleUrls: ['./select-character.component.css']
})
export class SelectCharacterComponent implements OnInit {

  public characters;
  public characterId = 0;
  public gameData;
  public displayState;

  constructor(private _logicService: LogicService) {
    this._logicService.castCharacters.subscribe(
      gameCharacters => this.characters = gameCharacters);
    this._logicService.castCharacterId.subscribe(
      characterId => this.characterId = characterId);
    this._logicService.cast.subscribe(
      gameValues => this.gameData = gameValues);
    this._logicService.castDisplayState.subscribe(
      displayStateObj => this.displayState = displayStateObj);
  }

  ngOnInit() {
  }

  selectHero(heroName) {
    btnClick.play();
    let hero = this.characters.find(elem => elem.name == heroName);

    let incomeBonus = hero.bonuses.find(elem => elem.name == "Gold");
    let powerBonus = hero.bonuses.find(elem => elem.name == "Power");
    let gameResoucers = hero.bonuses.find(elem => elem.name == "Resources");

    this._logicService.getSelectedCharacterId(hero.id);

    this.gameData.bonusIncome = incomeBonus.value;
    this.gameData.reduceEnergyConsumption = powerBonus.value;
    this.gameData.bonusGameResources = gameResoucers.value;

    this.displayState.isGameDisplayed = true;
  }
}
