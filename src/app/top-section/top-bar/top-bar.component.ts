import { Component, OnInit } from '@angular/core';
import { LogicService } from 'src/app/logic.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  public topBarData;
  
  constructor(private _logicService:LogicService) { 
    this._logicService.cast.subscribe(gameValues => this.topBarData = gameValues)
  }
  
  ngOnInit() {
  }

}
