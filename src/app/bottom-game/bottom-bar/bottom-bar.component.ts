import { Component, OnInit } from '@angular/core';
import { LogicService } from 'src/app/logic.service';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent implements OnInit {

  public gameValues;
  
  public btnValue = 2; // To improve (magic number)//

  public modalName;
  public isMoneyPressed = false;
  public isMaterialsPressed = false;

  public bottomValues;

  constructor(private _logicService: LogicService) {
    this._logicService.cast.subscribe(gameValues => this.bottomValues = gameValues);

  }

  ngOnInit() {
  }


  modalInfo(title) {
    this.isMoneyPressed = false;
    this.isMaterialsPressed = false;

    if (title == "Money") {
      this.modalName = "MONEY & GOALS";
      this.isMoneyPressed = true;
      return;
    }

    if (title == "Materials") {
      this.modalName = "GET MATERIALS";
      this.btnValue = 0;
      this.isMaterialsPressed = true;
      return;
    }

    if (title == "Workers") {
      this.modalName = "HIRE WORKERS";
      this.btnValue = 1;
      this.isMaterialsPressed = true;
      return;
    }

    if (title == "Engineers") {
      this.modalName = "HIRE ENGINEERS";
      this.btnValue = 2;
      this.isMaterialsPressed = true;
      return;
    }

  }

}
