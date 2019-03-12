import { Component } from '@angular/core';
import { LogicService } from './logic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public displayState;

  constructor(private _logicService:LogicService) {
    this._logicService.castDisplayState.subscribe(
      displayStateObj => this.displayState = displayStateObj);
  }

}
