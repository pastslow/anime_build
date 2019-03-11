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


  getConsumption(curentEnergy, totalEnergy){
    
    let procent = (curentEnergy / totalEnergy) * 100;

    if(procent >= 100){
      procent = 100;
    }

    return procent.toString() + "%";

  }

  changeAppeal(appealValue){
    
    let appeal = parseInt(appealValue)
    if(appeal < 0){
      this.isAppealPositive = false;
      return;
    }
    if(appeal >= 0){
      this.isAppealPositive = true;
      return;
    }
  }

  constructor(private _logicService:LogicService) { 
    this._logicService.cast.subscribe(gameValues => this.topBarData = gameValues);
  }
  
  ngOnInit() {
  }

}