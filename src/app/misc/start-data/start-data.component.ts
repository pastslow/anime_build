import { Component, OnInit } from '@angular/core';
import { LogicService } from 'src/app/logic.service';

@Component({
  selector: 'app-start-data',
  templateUrl: './start-data.component.html',
  styleUrls: ['./start-data.component.css']
})
export class StartDataComponent implements OnInit {
  public displayState;

  constructor(private _logicService: LogicService) {
    this._logicService.castDisplayState.subscribe(
      displayStateObj => this.displayState = displayStateObj);
  }

  ngOnInit() {
  }

  startGame() {
    this.displayState.isMenuDisplayed = false;
  }

}
