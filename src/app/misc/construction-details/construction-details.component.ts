import { Component, OnInit } from '@angular/core';
import { LogicService } from 'src/app/logic.service';
import { GameSlotsService } from 'src/app/game-slots.service';

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

  constructor(private _logicService: LogicService,
    private _slotsService:GameSlotsService) {
    this._slotsService.castSlotId.subscribe(
      slotId => this.slotIdNumber = slotId);
    this._slotsService.castTopSlots.subscribe(
      gameTopSlots => this.topSlots = gameTopSlots);
    this._slotsService.castMidSlots.subscribe(
      gameMidSlots => this.midSlots = gameMidSlots);
    this._slotsService.castBottomSlots.subscribe(
      gameBottomSlots => this.bottomSlots = gameBottomSlots);
    this.allGameSlots = this.topSlots.concat(this.midSlots, this.bottomSlots);
  }
  
  ngOnInit() {
  }



}
