import { Component, OnInit } from '@angular/core';
import { LogicService } from 'src/app/logic.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  public topBarData;
  public defaultClass = true;
  public isAppealPositive = true;


  getConsumption(curentEnergy, totalEnergy) {

    let procent = (curentEnergy / totalEnergy) * 100;

    if (procent >= 100) {
      procent = 100;
    }

    return procent.toString() + "%";

  }

  changeAppeal(appealValue) {

    let appeal = parseInt(appealValue)
    if (appeal < 0) {
      this.isAppealPositive = false;
      return;
    }
    if (appeal >= 0) {
      this.isAppealPositive = true;
      return;
    }
  }

  constructor(private _logicService: LogicService) {
    this._logicService.cast.subscribe(
      gameValues => this.topBarData = gameValues);
    
    this._logicService.castGameTime.subscribe(
      stopWatchObj => this.gameTime = stopWatchObj);

  }
  public gameTime;

  ngOnInit() {
    this.stopWacth();
  }

  public stopWacth() {
    setInterval(() => {
      if (this.gameTime.seconds === 59) {
        this.gameTime.seconds = 0;
        this.gameTime.minutes = this.gameTime.minutes + 1;
      }
      this.gameTime.seconds = this.gameTime.seconds + 1;

      if (this.gameTime.minutes === 59) {
        this.gameTime.minutes = 0;
        this.gameTime.hours = this.gameTime.hours + 1;
      }
    }, 1000);
  }

}