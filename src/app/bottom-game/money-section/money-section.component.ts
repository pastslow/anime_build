import { Component, OnInit } from '@angular/core';
import { LogicService } from 'src/app/logic.service';


@Component({
  selector: 'app-money-section',
  templateUrl: './money-section.component.html',
  styleUrls: ['./money-section.component.css']
})
export class MoneySectionComponent implements OnInit {

  public gameData;
  constructor(private _logicService: LogicService) {
    this._logicService.cast.subscribe(gameValues => this.gameData = gameValues);
  }
  ngOnInit() {
  }
}
