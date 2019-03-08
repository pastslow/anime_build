import { Component, OnInit } from '@angular/core';
import { LogicService } from 'src/app/logic.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  public topBarData;  

  public maxEnergy = 100;

  public curentEnergy = 0;

  public energyConsumption = ((this.maxEnergy * this.curentEnergy) / 100);

  public procentEnergy = this.energyConsumption.toString()+"%";

  getConsumption(curentEnergy, totalEnergy){
    
    let procent = (curentEnergy / totalEnergy) * 100;

    if(procent >= 100){
      procent = 100;
    }

    return procent.toString() + "%";

  }

  constructor(private _logicService:LogicService) { 
    this._logicService.cast.subscribe(gameValues => this.topBarData = gameValues);
    this.maxEnergy = this.topBarData.maxEnergy;
    this.curentEnergy = this.topBarData.energy;
  }
  
  ngOnInit() {
  }

}