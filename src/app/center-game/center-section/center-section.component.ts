import { Component, OnInit } from '@angular/core';
import { LogicService } from 'src/app/logic.service';
import { ambient } from '../../misc/const';
import { GameCharactersService } from 'src/app/game-characters.service';
import { Howl, Howler } from 'howler';


@Component({
  selector: 'app-center-section',
  templateUrl: './center-section.component.html',
  styleUrls: ['./center-section.component.css'],
})
export class CenterSectionComponent implements OnInit {
  public gameData;
  public popUpError;

  public defaultClass = true;

  public selectedCharacterId;
  public gameCharacters;

  constructor(private _logicService: LogicService,
    private _charactersService: GameCharactersService) {
    this._logicService.cast.subscribe
      (gameValues => this.gameData = gameValues);

    this._logicService.castPopUpError.subscribe(
      popUpErrorObj => this.popUpError = popUpErrorObj);

    this._charactersService.castCharacterId.subscribe(
      selectedCharacterId => this.selectedCharacterId = selectedCharacterId);

    this._charactersService.castCharacters.subscribe(
      gameCharacters => this.gameCharacters = gameCharacters);
  }

  updateScoreAndRentalIncome() {
    this.gameData.money = this.gameData.money + this.gameData.income;

    this.gameData.score = (
      this.gameData.score + this.gameData.income / 100);
      
  };

  public getRentalIncomeAndScore() {
    setInterval(() => {
      this.updateScoreAndRentalIncome();
    }, 9000);
  }

  ngOnInit() {
    this.getRentalIncomeAndScore();
    ambient.play();
    Howler.volume(this.gameData.volume);
  }

  hideError() {
    this._logicService.hideError();
  }


}
