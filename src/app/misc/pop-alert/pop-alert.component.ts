import { Component, OnInit } from '@angular/core';
import { LogicService } from 'src/app/logic.service';

@Component({
  selector: 'app-pop-alert',
  templateUrl: './pop-alert.component.html',
  styleUrls: ['./pop-alert.component.css']
})
export class PopAlertComponent implements OnInit {
  public popUpError;

  constructor(private _logicService:LogicService) {
    this._logicService.castPopUpError.subscribe(
      popUpErrorObj => this.popUpError = popUpErrorObj);
   }

  ngOnInit() {
  }

}
