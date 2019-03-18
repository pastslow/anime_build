import { Component, OnInit } from '@angular/core';
import { LogicService } from 'src/app/logic.service';
import { ambient } from '../../misc/const';

@Component({
  selector: 'app-center-section',
  templateUrl: './center-section.component.html',
  styleUrls: ['./center-section.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class CenterSectionComponent implements OnInit {
  public gameData;
  public popUpError;

  public defaultClass = true;

  constructor(private _logicService: LogicService) {
    this._logicService.cast.subscribe
      (gameValues => this.gameData = gameValues);

    this._logicService.castPopUpError.subscribe(
      popUpErrorObj => this.popUpError = popUpErrorObj);
      
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
    
  }

  onResize(event){
    event.target.innerWidth; // window width
  }

  


  hideError() {
    this._logicService.hideError();
  }


}
