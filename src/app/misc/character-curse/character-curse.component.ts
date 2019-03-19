import { Component, OnInit } from '@angular/core';
import { LogicService } from 'src/app/logic.service';

@Component({
  selector: 'app-character-curse',
  templateUrl: './character-curse.component.html',
  styleUrls: ['./character-curse.component.css']
})
export class CharacterCurseComponent implements OnInit {
  public gameData;

  public selectedCharacterId;
  public characters;

  constructor(private _logicService: LogicService) {
    this._logicService.cast.subscribe(
      gameValues => this.gameData = gameValues);
    this._logicService.castCharacterId.subscribe(
      characterId => this.selectedCharacterId = characterId);
    this._logicService.castCharacters.subscribe(
      gameCharacters => this.characters = gameCharacters);
  }

  ngOnInit() {
  }

  getRidOfTheCurse(cureValue){
    this.gameData.money = 0;
    this.gameData.materials = 0;

    let selectedCharacter = this.characters[this.selectedCharacterId];
    selectedCharacter.cursed = false;

    let characterIncomeBonus = (
      selectedCharacter.bonuses.find(
        elem => elem.name === "Gold"
      ));

    let characterEnergyBonus = (
      selectedCharacter.bonuses.find(
        elem => elem.name === "Power"
      ))

    characterIncomeBonus.value = characterIncomeBonus.value + cureValue;
    characterEnergyBonus.value = characterEnergyBonus.value + cureValue;

    this.gameData.bonusIncome = this.gameData.bonusIncome + cureValue;
    this.gameData.reduceEnergyConsumption = (
    this.gameData.reduceEnergyConsumption + cureValue);

  }
}
