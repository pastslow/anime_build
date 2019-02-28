import { Component, OnInit } from '@angular/core';
import { LogicService } from 'src/app/logic.service';

@Component({
  selector: 'app-center-section',
  templateUrl: './center-section.component.html',
  styleUrls: ['./center-section.component.css']
})
export class CenterSectionComponent implements OnInit {
  public gameData;

  constructor(private _logicService:LogicService) {
    this._logicService.cast.subscribe(gameValues => this.gameData = gameValues)
   }

  sayHello(){
    this.gameData.money = this.gameData.money + this.gameData.income;
    }; 

    public sampleMethodCall() {
      setInterval(() => {
        this.sayHello(); 
      }, 3000); 
   }
  ngOnInit() {
    this.sampleMethodCall();
    }


}
