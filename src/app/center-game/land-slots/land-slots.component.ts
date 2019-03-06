import { Component, OnInit } from '@angular/core';
import { LogicService } from 'src/app/logic.service';

@Component({
  selector: 'app-land-slots',
  templateUrl: './land-slots.component.html',
  styleUrls: ['./land-slots.component.css']
})
export class HouseBuildComponent implements OnInit {

  public isLandBought = false;
  public hasConstruction = false;

  public slotIdNumber;
  public slotNeedRepair;

  public topSlots;
  public midSlots;
  public bottomSlots;

  public allGameSlots;

  constructor(private _logicService: LogicService) {
    this._logicService.castSlotId.subscribe(slotId => this.slotIdNumber = slotId);

    this._logicService.castTopSlots.subscribe(mapTopSlots => this.topSlots = mapTopSlots);

    this._logicService.castMidSlots.subscribe(mapMidSlots => this.midSlots = mapMidSlots);
    
    this._logicService.castBottomSlots.subscribe(mapBottomSlots => this.bottomSlots = mapBottomSlots);

    this.allGameSlots = this.topSlots.concat(this.midSlots, this.bottomSlots);

    this._logicService.castSlotDetails.subscribe(slotDetails => this.slotNeedRepair = slotDetails);
   }

  ngOnInit() {
  }

  test(modalImg, event) {

    this.slotIdNumber = parseInt(event.target.slot);
    this.slotNeedRepair = this.allGameSlots[this.slotIdNumber].needRepair;
    // Change the new value into the service
    this._logicService.getSlotId(this.slotIdNumber);
    this._logicService.getSlotDetails(this.slotNeedRepair);

    if (event.target.alt === "empty") {
      this.isLandBought = false;
      this.hasConstruction = false;
      modalImg.src = event.target.src;
      return;
    }
    if (event.target.alt === "bought") {
      this.isLandBought = true;
      this.hasConstruction = false;
      modalImg.src = event.target.src;
      return;
    }
    modalImg.src = event.target.src;
    this.isLandBought = false;
    this.hasConstruction = true;
  }

}
