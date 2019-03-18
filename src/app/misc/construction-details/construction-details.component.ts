import { Component, OnInit } from '@angular/core';
import { LogicService } from 'src/app/logic.service';

@Component({
  selector: 'app-construction-details',
  templateUrl: './construction-details.component.html',
  styleUrls: ['./construction-details.component.css']
})
export class ConstructionDetailsComponent implements OnInit {
  public slotIdNumber;
  public topSlots;
  public midSlots;
  public bottomSlots;

  public allGameSlots;

  constructor(private _logicService: LogicService) {
    this._logicService.castSlotId.subscribe(
      slotId => this.slotIdNumber = slotId);
    this._logicService.castTopSlots.subscribe(
      gameTopSlots => this.topSlots = gameTopSlots);
    this._logicService.castMidSlots.subscribe(
      gameMidSlots => this.midSlots = gameMidSlots);
    this._logicService.castBottomSlots.subscribe(
      gameBottomSlots => this.bottomSlots = gameBottomSlots);
    this.allGameSlots = this.topSlots.concat(this.midSlots, this.bottomSlots);
  }
  
  ngOnInit() {
  }



}
