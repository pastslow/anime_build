import { Component, OnInit } from '@angular/core';
import { LogicService } from '../logic.service';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent implements OnInit {
  public displayMenu;
  public popUpError;

  constructor(private _logicService: LogicService) {
    this._logicService.castDisplayState.subscribe(
      displayStateObj => this.displayMenu = displayStateObj
    );

    this._logicService.castPopUpError.subscribe(
      popUpError => this.popUpError = popUpError
    );
  }

  ngOnInit() {
  }

  hideError(){
    this._logicService.hideError();
  }

}
