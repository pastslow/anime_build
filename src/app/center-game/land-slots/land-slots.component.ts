import { Component, OnInit } from '@angular/core';
import { LogicService } from 'src/app/logic.service';
import { GameSlotsService } from 'src/app/game-slots.service';

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

  public isSupportingEngUpgrade;

  public slotsArray;

  constructor(private _logicService: LogicService,
    private _slotsService: GameSlotsService) {
    this._slotsService.castSlotId.subscribe(
      slotId => this.slotIdNumber = slotId);
    this._slotsService.castTopSlots.subscribe(
      mapTopSlots => this.topSlots = mapTopSlots);
    this._slotsService.castMidSlots.subscribe(
      mapMidSlots => this.midSlots = mapMidSlots);
    this._slotsService.castBottomSlots.subscribe(
      mapBottomSlots => this.bottomSlots = mapBottomSlots);
    this.allGameSlots = this.topSlots.concat(
      this.midSlots, this.bottomSlots);
    this._slotsService.castSlotDetails.subscribe(
      slotDetails => this.slotNeedRepair = slotDetails);

    this.slotsArray = [
        {
          name: this.topSlots,
          class:"top-slots container-slots",
        },
        {
          name: this.midSlots,
          class:"mid-slots container-slots",
        },
        {
          name: this.bottomSlots,
          class:"bottom-slots container-slots",
        },
      ]
  }

  ngOnInit() {
  }

  performActionsOnSlot(modalImg, landImg) {
    this.slotIdNumber = parseInt(landImg.slot);
    this.slotNeedRepair = this.allGameSlots[this.slotIdNumber].needRepair;
    this._slotsService.getSlotId(this.slotIdNumber);
    this._slotsService.getSlotDetails(this.slotNeedRepair);

    if (this.allGameSlots[this.slotIdNumber].buildingType === "producer") {
      this.isSupportingEngUpgrade = false;
    } else {
      this.isSupportingEngUpgrade = true;
    }

    if (landImg.alt === "empty") {
      this.isLandBought = false;
      this.hasConstruction = false;
      modalImg.src = landImg.src;
      return;
    }
    if (landImg.alt === "bought") {
      this.isLandBought = true;
      this.hasConstruction = false;
      modalImg.src = landImg.src;
      return;
    }
    modalImg.src = landImg.src;
    this.isLandBought = false;
    this.hasConstruction = true;
  }

}

