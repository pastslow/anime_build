import { Component, OnInit } from '@angular/core';
import { LogicService } from 'src/app/logic.service';
import { ambient } from '../../misc/const';

@Component({
  selector: 'app-center-section',
  templateUrl: './center-section.component.html',
  styleUrls: ['./center-section.component.css']
})
export class CenterSectionComponent implements OnInit {
  public gameData;

  constructor(private _logicService: LogicService) {
    this._logicService.cast.subscribe(gameValues => this.gameData = gameValues)
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


}
