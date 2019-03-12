import { Component, OnInit } from '@angular/core';
import { LogicService } from '../logic.service';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent implements OnInit {
  public displayState;

  constructor(private _logicService: LogicService) {
    this._logicService.castDisplayState.subscribe(
      displayStateObj => this.displayState = displayStateObj);
  }

  ngOnInit() {
  }

}
