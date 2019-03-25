import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class GameSlotsService {

  constructor() { }
  // ------------------- Slot id is based on slot number ------------------- //
  public currentSlotId = 0;

  private slotId = new BehaviorSubject<number>(this.currentSlotId);
  castSlotId = this.slotId.asObservable();

  getSlotId(newId) {
    this.slotId.next(newId);
  }
  // -------------------------- Slot need repair --------------------------- //
  public slotCondition = false;

  private slotDetails = new BehaviorSubject<boolean>(this.slotCondition);
  castSlotDetails = this.slotDetails.asObservable();

  getSlotDetails(newCondition) {
    this.slotDetails.next(newCondition);
  }
  // --------------------------- Game Land Slots --------------------------- //
  public mapTopSlots = [
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg: "UPGRADE/NOUPDATE",
      starUpdateImg: "UPGRADE/NOUPDATE",
      repairImg: "UPGRADE/NOUPDATE",
      appealImg: "UPGRADE/NOUPDATE",
      needRepair: false,
      income: 0,
      energy: 0,
      maxEnergy: 0,
      cost: 0,
      appeal: 0,
      buildingType: "consumer",
      number: 0
    },
    {
      img: "HOUSE0/NONE1",
      condition: "bought",
      energyUpdateImg: "UPGRADE/NOUPDATE",
      starUpdateImg: "UPGRADE/NOUPDATE",
      repairImg: "UPGRADE/NOUPDATE",
      appealImg: "UPGRADE/NOUPDATE",
      needRepair: false,
      income: 0,
      energy: 0,
      maxEnergy: 0,
      cost: 0,
      appeal: 0,
      buildingType: "consumer",
      number: 1
    },
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg: "UPGRADE/NOUPDATE",
      starUpdateImg: "UPGRADE/NOUPDATE",
      repairImg: "UPGRADE/NOUPDATE",
      appealImg: "UPGRADE/NOUPDATE",
      needRepair: false,
      income: 0,
      energy: 0,
      maxEnergy: 0,
      cost: 0,
      appeal: 0,
      buildingType: "consumer",
      number: 2
    },
    {
      img: "HOUSE0/NONE1",
      condition: "bought",
      energyUpdateImg: "UPGRADE/NOUPDATE",
      starUpdateImg: "UPGRADE/NOUPDATE",
      repairImg: "UPGRADE/NOUPDATE",
      appealImg: "UPGRADE/NOUPDATE",
      needRepair: false,
      income: 0,
      energy: 0,
      maxEnergy: 0,
      cost: 0,
      appeal: 0,
      buildingType: "consumer",
      number: 3
    },
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg: "UPGRADE/NOUPDATE",
      starUpdateImg: "UPGRADE/NOUPDATE",
      repairImg: "UPGRADE/NOUPDATE",
      appealImg: "UPGRADE/NOUPDATE",
      needRepair: false,
      income: 0,
      energy: 0,
      maxEnergy: 0,
      cost: 0,
      appeal: 0,
      buildingType: "consumer",
      number: 4
    },
  ]
  public mapMidSlots = [
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg: "UPGRADE/NOUPDATE",
      starUpdateImg: "UPGRADE/NOUPDATE",
      repairImg: "UPGRADE/NOUPDATE",
      appealImg: "UPGRADE/NOUPDATE",
      needRepair: false,
      income: 0,
      energy: 0,
      maxEnergy: 0,
      cost: 0,
      appeal: 0,
      buildingType: "consumer",
      number: 5
    },
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg: "UPGRADE/NOUPDATE",
      starUpdateImg: "UPGRADE/NOUPDATE",
      repairImg: "UPGRADE/NOUPDATE",
      appealImg: "UPGRADE/NOUPDATE",
      needRepair: false,
      income: 0,
      energy: 0,
      maxEnergy: 0,
      cost: 0,
      appeal: 0,
      buildingType: "consumer",
      number: 6
    },
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg: "UPGRADE/NOUPDATE",
      starUpdateImg: "UPGRADE/NOUPDATE",
      repairImg: "UPGRADE/NOUPDATE",
      appealImg: "UPGRADE/NOUPDATE",
      needRepair: false,
      income: 0,
      energy: 0,
      maxEnergy: 0,
      cost: 0,
      appeal: 0,
      buildingType: "consumer",
      number: 7
    },
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg: "UPGRADE/NOUPDATE",
      starUpdateImg: "UPGRADE/NOUPDATE",
      repairImg: "UPGRADE/NOUPDATE",
      appealImg: "UPGRADE/NOUPDATE",
      needRepair: false,
      income: 0,
      energy: 0,
      maxEnergy: 0,
      cost: 0,
      appeal: 0,
      buildingType: "consumer",
      number: 8
    },
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg: "UPGRADE/NOUPDATE",
      starUpdateImg: "UPGRADE/NOUPDATE",
      repairImg: "UPGRADE/NOUPDATE",
      appealImg: "UPGRADE/NOUPDATE",
      needRepair: false,
      income: 0,
      energy: 0,
      maxEnergy: 0,
      cost: 0,
      appeal: 0,
      buildingType: "consumer",
      number: 9
    }
  ]
  public mapBottomSlots = [
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg: "UPGRADE/NOUPDATE",
      starUpdateImg: "UPGRADE/NOUPDATE",
      repairImg: "UPGRADE/NOUPDATE",
      appealImg: "UPGRADE/NOUPDATE",
      needRepair: false,
      income: 0,
      energy: 0,
      maxEnergy: 0,
      cost: 0,
      appeal: 0,
      buildingType: "consumer",
      number: 10
    },
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg: "UPGRADE/NOUPDATE",
      starUpdateImg: "UPGRADE/NOUPDATE",
      repairImg: "UPGRADE/NOUPDATE",
      appealImg: "UPGRADE/NOUPDATE",
      needRepair: false,
      income: 0,
      energy: 0,
      maxEnergy: 0,
      cost: 0,
      appeal: 0,
      buildingType: "consumer",
      number: 11
    },
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg: "UPGRADE/NOUPDATE",
      starUpdateImg: "UPGRADE/NOUPDATE",
      repairImg: "UPGRADE/NOUPDATE",
      appealImg: "UPGRADE/NOUPDATE",
      needRepair: false,
      income: 0,
      energy: 0,
      maxEnergy: 0,
      cost: 0,
      appeal: 0,
      buildingType: "consumer",
      number: 12
    },
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg: "UPGRADE/NOUPDATE",
      starUpdateImg: "UPGRADE/NOUPDATE",
      repairImg: "UPGRADE/NOUPDATE",
      appealImg: "UPGRADE/NOUPDATE",
      needRepair: false,
      income: 0,
      energy: 0,
      maxEnergy: 0,
      cost: 0,
      appeal: 0,
      buildingType: "consumer",
      number: 13
    },
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg: "UPGRADE/NOUPDATE",
      starUpdateImg: "UPGRADE/NOUPDATE",
      repairImg: "UPGRADE/NOUPDATE",
      appealImg: "UPGRADE/NOUPDATE",
      needRepair: false,
      income: 0,
      energy: 0,
      maxEnergy: 0,
      cost: 0,
      appeal: 0,
      buildingType: "consumer",
      number: 14
    }
  ]
  // ------------------------------ Top slots ------------------------------ //
  private gameTopSlots = new BehaviorSubject<object>(this.mapTopSlots);
  castTopSlots = this.gameTopSlots.asObservable();

  getSlots(newObj) {
    this.gameTopSlots.next(newObj)
  }
  // ------------------------------ Mid slots ------------------------------ //
  private gameMidSlots = new BehaviorSubject<object>(this.mapMidSlots);
  castMidSlots = this.gameMidSlots.asObservable();

  getMidSlots(newObj) {
    this.gameMidSlots.next(newObj);
  }
  // ----------------------------- Bottom slots ---------------------------- //
  private gameBottomSlots = new BehaviorSubject<object>(this.mapBottomSlots);
  castBottomSlots = this.gameBottomSlots.asObservable();

  getBottomSlots(newObj) {
    this.gameBottomSlots.next(newObj)
  }
}
