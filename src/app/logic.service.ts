import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class LogicService {

  constructor() { }
  //------------------------------- Stopwatch -------------------------------//
  public gameTime = {
    seconds:0,
    minutes:0,
    hours:0
  }

  private stopWatchObj = new BehaviorSubject<object>(this.gameTime);
  castGameTime = this.stopWatchObj.asObservable();

  getStopWatchTime(newObj){
    this.stopWatchObj.next(newObj);
  }
  //---------------------------- Stopwatch end ------------------------------//

  public displayState = {
    isMenuDisplayed: true,
    isGameDisplayed: false
  }

  private displayStateObj = new BehaviorSubject<object>(this.displayState);
  castDisplayState = this.displayStateObj.asObservable();

  getDisplayState(newObj) {
    this.displayStateObj.next(newObj);
  }

  //---------------------------- Pop Up Error ------------------------------ //
  public popUpError = {
    isPopUpDisplayed: false,
    popUpMessage: ""
  }

  private popUpErrorObj = new BehaviorSubject<object>(this.popUpError);
  castPopUpError = this.popUpErrorObj.asObservable();

  getPopUpError(newObj) {
    this.popUpErrorObj.next(newObj);
  }

  displayError(message) {
    this.popUpError.isPopUpDisplayed = true;
    this.popUpError.popUpMessage = message;

    setTimeout(() => {
      this.popUpError.isPopUpDisplayed = false;
    }, 3000);
  }

  hideError() {
    this.popUpError.isPopUpDisplayed = false;
  }
  //------------------------- End of Pop Up Error -------------------------- //

  //--------------------- User selected character id ----------------------- //
  public selectedCharacterId = 0;

  private characterId = new BehaviorSubject<number>(this.selectedCharacterId);
  castCharacterId = this.characterId.asObservable();

  getSelectedCharacterId(newId) {
    this.characterId.next(newId);
  }
  //----------------- End of user selected character id ---------------------//


  public currentSlotId = 0;

  private slotId = new BehaviorSubject<number>(this.currentSlotId);
  castSlotId = this.slotId.asObservable();

  getSlotId(newId) {
    this.slotId.next(newId);
  }

  public slotCondition = false;

  private slotDetails = new BehaviorSubject<boolean>(this.slotCondition);
  castSlotDetails = this.slotDetails.asObservable();

  getSlotDetails(newCondition) {
    this.slotDetails.next(newCondition);
  }

  getHeight() {
    return window.innerHeight;
  }

  public gameDataValues = {
    money: 30000,
    income: 0,
    incomeStopped: 0,
    incomeBeforeStopped: 0,
    bonusIncome: 0,
    reduceEnergyConsumption: 0,
    bonusGameResources: 0,
    materials: 200,
    workers: 2,
    engineers: 1,
    energy: 0,
    maxEnergy: 150,
    goal: 8000000,
    score: 0,
    appeal: 0,
    landCost: 25000,
    fullScreen: false,
    volume: "0,1",
  }

  private gameValues = new BehaviorSubject<object>(this.gameDataValues);
  cast = this.gameValues.asObservable();

  changeObject(newObj) {
    this.gameValues.next(newObj)
  }

  bottomLogicData() {
    return [
      {
        title: "Buying Materials",
        primaryIcon: 'WOODS',
        secondaryIcon: 'MATERIALS',
        folderIcons: 'MATERIALS',
        shopItems: [
          {
            name: "few materials",
            icon: 'MATERIAL_01',
            cost: 5000,
            number: 100,
            id: 1
          },
          {
            name: "medium pack of materials",
            icon: 'MATERIAL_02',
            cost: 24000,
            number: 500,
            id: 2
          },
          {
            name: "huge pack of materials",
            icon: 'MATERIAL_03',
            cost: 45000,
            number: 1000,
            id: 3
          },
        ]
      },
      {
        title: "Hire Workers",
        primaryIcon: 'WORKERS',
        secondaryIcon: 'WORKER',
        folderIcons: 'WORKERS',
        shopItems: [
          {
            name: "One Worker",
            icon: 'WORKER_01',
            cost: 30000,
            number: 1,
            id: 1
          },
          {
            name: "Two Workers",
            icon: 'WORKER_02',
            cost: 55000,
            number: 2,
            id: 2
          },
          {
            name: "Three Workers",
            icon: 'WORKER_03',
            cost: 80000,
            number: 3,
            id: 3
          },
        ]
      },
      {
        title: "Hire Engineers",
        primaryIcon: 'ENGINEERS',
        secondaryIcon: 'ENGINEER',
        folderIcons: 'ENGINEERS',
        shopItems: [
          {
            name: "One Engineer",
            icon: 'ENGINEER_01',
            cost: 35000,
            number: 1,
            id: 1
          },
          {
            name: "Two Engineers",
            icon: 'ENGINEER_02',
            cost: 65000,
            number: 2,
            id: 2
          },
          {
            name: "Three Engineers",
            icon: 'ENGINEER_03',
            cost: 90000,
            number: 3,
            id: 3
          },
        ]
      }
    ]
  }

  slotActions() {
    return [
      {
        name: "Buildings",
        folderIcons: "BUILDINGS",
        construct: [
          {
            name: "Garden",
            icon: "GARDEN_CENTER",
            cost: 90000,
            workers: 27,
            materials: 3000,
            energy: 440,
            income: 9000,
            appeal: -10,
            appealImg:"UPGRADE/NEGATIVE_APPEAL/NEG_10",
            buildingId: "HOUSE20",
            buildingType: "consumer"
          },
          {
            name: "Lumber Mill",
            icon: "LUMBER_MILL",
            cost: 120000,
            workers: 36,
            materials: 5000,
            energy: 500,
            income: 12000,
            appeal: -15,
            appealImg:"UPGRADE/NEGATIVE_APPEAL/NEG_15",
            buildingId: "HOUSE20",
            buildingType: "consumer"
          },
          {
            name: "Recycle Center",
            icon: "RECYCLE_CENTER",
            cost: 150000,
            workers: 45,
            materials: 7000,
            energy: 550,
            income: 15000,
            appeal: -15,
            appealImg:"UPGRADE/NEGATIVE_APPEAL/NEG_15",
            buildingId: "HOUSE19",
            buildingType: "consumer"
          },
          {
            name: "Business Center",
            icon: "BUSINESS_CENTER",
            cost: 180000,
            workers: 54,
            materials: 9500,
            energy: 650,
            income: 18000,
            appeal: -20,
            appealImg:"UPGRADE/NEGATIVE_APPEAL/NEG_20",
            buildingId: "HOUSE22",
            buildingType: "consumer"
          },
          {
            name: "Tech Center",
            icon: "TECH_CENTER",
            cost: 220000,
            workers: 66,
            materials: 15000,
            energy: 740,
            income: 22000,
            appeal: -20,
            appealImg:"UPGRADE/NEGATIVE_APPEAL/NEG_20",
            buildingId: "HOUSE45",
            buildingType: "consumer"
          }
        ]
      },
      {
        name: "Houses",
        folderIcons: "HOUSES",
        construct: [
          {
            name: "House",
            icon: "HOUSE_01",
            cost: 3000,
            workers: 1,
            materials: 100,
            energy: 40,
            income: 300,
            appeal: 0,
            appealImg:"UPGRADE/NOUPDATE",
            buildingId: "HOUSE01",
            buildingType: "consumer"
          },
          {
            name: "Duplex",
            icon: "HOUSE_02",
            cost: 6000,
            workers: 2,
            materials: 200,
            energy: 70,
            income: 600,
            appeal: 0,
            appealImg:"UPGRADE/NOUPDATE",
            buildingId: "HOUSE02",
            buildingType: "consumer"
          },
          {
            name: "Craftsman",
            icon: "HOUSE_03",
            cost: 14000,
            workers: 4,
            materials: 450,
            energy: 145,
            income: 1400,
            appeal: 0,
            appealImg:"UPGRADE/NOUPDATE",
            buildingId: "HOUSE03",
            buildingType: "consumer"
          },
          {
            name: "Condo",
            icon: "HOUSE_04",
            cost: 30000,
            workers: 9,
            materials: 950,
            energy: 220,
            income: 3000,
            appeal: 0,
            appealImg:"UPGRADE/NOUPDATE",
            buildingId: "HOUSE04",
            buildingType: "consumer"
          },
          {
            name: "Georgian",
            icon: "HOUSE_05",
            cost: 60000,
            workers: 18,
            materials: 1900,
            energy: 350,
            income: 6000,
            appeal: 0,
            appealImg:"UPGRADE/NOUPDATE",
            buildingId: "HOUSE05",
            buildingType: "consumer"
          },
          {
            name: "Apartment",
            icon: "HOUSE_06",
            cost: 80000,
            workers: 24,
            materials: 2500,
            energy: 400,
            income: 8000,
            appeal: 0,
            appealImg:"UPGRADE/NOUPDATE",
            buildingId: "HOUSE06",
            buildingType: "consumer"
          },
        ]
      },
      {
        name: "Marks",
        folderIcons: "MARKS",
        construct: [
          {
            name: "Tennis",
            icon: "TENNIS",
            cost: 10000,
            workers: 3,
            materials: 500,
            energy: 10,
            appeal: 10,
            appealImg:"UPGRADE/POSITIVE_APPEAL/POS_10",
            income: 100,
            buildingId: "HOUSE41",
            buildingType: "consumer"
          },
          {
            name: "Pool",
            icon: "POOL",
            cost: 14000,
            workers: 4,
            materials: 600,
            energy: 20,
            appeal: 15,
            appealImg:"UPGRADE/POSITIVE_APPEAL/POS_15",
            income: 140,
            buildingId: "HOUSE42",
            buildingType: "consumer"
          },
          {
            name: "Minigolf",
            icon: "MINIGOLF",
            cost: 30000,
            workers: 6,
            materials: 800,
            energy: 40,
            appeal: 20,
            appealImg:"UPGRADE/POSITIVE_APPEAL/POS_20",
            income: 300,
            buildingId: "HOUSE43",
            buildingType: "consumer"
          },
          {
            name: "Amphitheater",
            icon: "AMPHITHEATER",
            cost: 40000,
            workers: 8,
            materials: 1000,
            energy: 100,
            appeal: 25,
            appealImg:"UPGRADE/POSITIVE_APPEAL/POS_25",
            income: 400,
            buildingId: "HOUSE44",
            buildingType: "consumer"
          }
        ]
      },
      {
        name: "Services",
        folderIcons: "SERVICES",
        construct: [
          {
            name: "Wind",
            icon: "WIND",
            cost: 10000,
            workers: 5,
            materials: 500,
            energy: 100,
            appeal: -10,
            appealImg:"UPGRADE/NEGATIVE_APPEAL/NEG_10",
            income: 100,
            buildingId: "HOUSE37",
            buildingType: "producer"
          },
          {
            name: "Solar",
            icon: "SOLAR",
            cost: 40000,
            workers: 12,
            materials: 1500,
            energy: 300,
            appeal: -20,
            appealImg:"UPGRADE/NEGATIVE_APPEAL/NEG_20",
            income: 400,
            buildingId: "HOUSE38",
            buildingType: "producer"
          },
          {
            name: "Nuclear",
            icon: "NUCLEAR",
            cost: 80000,
            workers: 40,
            materials: 4000,
            energy: 800,
            appeal: -40,
            appealImg:"UPGRADE/NEGATIVE_APPEAL/NEG_40",
            income: 800,
            buildingId: "HOUSE40",
            buildingType: "producer"
          }
        ]
      },
      {
        name: "Shops",
        folderIcons: "SHOPS",
        construct: [
          {
            name: "Botique",
            icon: "BOTIQUE",
            cost: 240000,
            workers: 72,
            materials: 17000,
            energy: 800,
            income: 24000,
            appeal: 0,
            appealImg:"UPGRADE/NOUPDATE",
            buildingId: "HOUSE47",
            buildingType: "consumer"
          },
          {
            name: "Grocery",
            icon: "GROCERY",
            cost: 300000,
            workers: 90,
            materials: 22000,
            energy: 840,
            income: 30000,
            appeal: 0,
            appealImg:"UPGRADE/NOUPDATE",
            buildingId: "HOUSE48",
            buildingType: "consumer"
          },
          {
            name: "Cinema",
            icon: "CINEMA",
            cost: 360000,
            workers: 108,
            materials: 27000,
            energy: 920,
            income: 36000,
            appeal: 0,
            appealImg:"UPGRADE/NOUPDATE",
            buildingId: "HOUSE16",
            buildingType: "consumer"
          },
          {
            name: "Backery",
            icon: "BACKERY",
            cost: 500000,
            workers: 150,
            materials: 31000,
            energy: 1250,
            income: 80000,
            appeal: 0,
            appealImg:"UPGRADE/NOUPDATE",
            buildingId: "HOUSE46",
            buildingType: "consumer"
          }
        ]
      }
    ]
  }

  public characters = [
    {
      name: "Natsu",
      img: 'NATSU',
      id: 0,
      cursed:false,
      info: `
      Using my power you will obtain less materials, workers and engineers
      but you will construct buildings which produce
      greater income and use greater energy.`,
      bonuses: [
        {
          name: "Gold",
          bonusImg: "BONUS/INCOME",
          value: 10,
          color: "green",
          description: "Construction income ",
          procent: "%"
        },
        {
          name: "Power",
          bonusImg: "BONUS/POWER",
          color: "red",
          description: "Construction energy consumption ",
          value: -10,
          procent: "%"
        },
        {
          name: "Resources",
          bonusImg: "BONUS/RESOURCE",
          color: "red",
          description: "Materials/Workers/Engineers ",
          value: -10,
          procent: "%"
        },
      ]
    },
    {
      name: "Lucy",
      img: 'LUCY',
      cursed:false,
      id: 1,
      info: `
      Using my power you will obtain less materials, workers and engineers
      but you will construct buildings which produce greater income
      and use less energy.`,
      bonuses: [
        {
          name: "Gold",
          bonusImg: "BONUS/INCOME",
          color: "green",
          description: "Construction income ",
          value: 5,
          procent: "%"
        },
        {
          name: "Power",
          bonusImg: "BONUS/POWER",
          color: "green",
          description: "Construction energy consumption ",
          value: 5,
          procent: "%"
        },
        {
          name: "Resources",
          bonusImg: "BONUS/RESOURCE",
          color: "red",
          description: "Materials/Workers/Engineers ",
          value: -5,
          procent: "%"
        },
      ]
    },
    {
      name: "Gray",
      img: 'GRAY',
      cursed:false,
      id: 2,
      info: `
      Using my power you will obtain more materials, workers and engineers
      and all new construction will produce greater income
      but also will use greater energy.`,
      bonuses: [
        {
          name: "Gold",
          bonusImg: "BONUS/INCOME",
          color: "green",
          description: "Construction income ",
          value: 5,
          procent: "%"
        },
        {
          name: "Power",
          bonusImg: "BONUS/POWER",
          color: "red",
          description: "Construction energy consumption ",
          value: -10,
          procent: "%"
        },
        {
          name: "Resources",
          bonusImg: "BONUS/RESOURCE",
          color: "green",
          description: "Materials/Workers/Engineers ",
          value: 10,
          procent: "%"
        },
      ]
    },
    {
      name: "Erza",
      img: 'ERZA',
      cursed:false,
      id: 3,
      info: `
      Using my power you will obtain more materials, workers and engineers,
      but you will construct buildings which produce less income
      and use greater energy.`,
      bonuses: [
        {
          name: "Gold",
          bonusImg: "BONUS/INCOME",
          color: "red",
          description: "Construction income ",
          value: -5,
          procent: "%"
        },
        {
          name: "Power",
          bonusImg: "BONUS/POWER",
          color: "red",
          description: "Construction energy consumption ",
          value: -10,
          procent: "%"
        },
        {
          name: "Resources",
          bonusImg: "BONUS/RESOURCE",
          color: "green",
          description: "Materials/Workers/Engineers ",
          value: 20,
          procent: "%"
        },
      ]
    }
  ]
  private gameCharacters = new BehaviorSubject<object>(this.characters);
  castCharacters = this.gameCharacters.asObservable();

  getCharacters(newObj){
    this.gameCharacters.next(newObj);
  }

  // Game Land Slots
  public mapTopSlots = [
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg: "UPGRADE/NOUPDATE",
      starUpdateImg: "UPGRADE/NOUPDATE",
      repairImg: "UPGRADE/NOUPDATE",
      appealImg:"UPGRADE/NOUPDATE",
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
      appealImg:"UPGRADE/NOUPDATE",
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
      appealImg:"UPGRADE/NOUPDATE",
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
      appealImg:"UPGRADE/NOUPDATE",
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
      appealImg:"UPGRADE/NOUPDATE",
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
      appealImg:"UPGRADE/NOUPDATE",
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
      appealImg:"UPGRADE/NOUPDATE",
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
      appealImg:"UPGRADE/NOUPDATE",
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
      appealImg:"UPGRADE/NOUPDATE",
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
      appealImg:"UPGRADE/NOUPDATE",
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
      appealImg:"UPGRADE/NOUPDATE",
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
      appealImg:"UPGRADE/NOUPDATE",
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
      appealImg:"UPGRADE/NOUPDATE",
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
      appealImg:"UPGRADE/NOUPDATE",
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
      appealImg:"UPGRADE/NOUPDATE",
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

  // Top slots
  private gameTopSlots = new BehaviorSubject<object>(this.mapTopSlots);
  castTopSlots = this.gameTopSlots.asObservable();

  getSlots(newObj) {
    this.gameTopSlots.next(newObj)
  }
  // Mid Slots
  private gameMidSlots = new BehaviorSubject<object>(this.mapMidSlots);
  castMidSlots = this.gameMidSlots.asObservable();

  getMidSlots(newObj) {
    this.gameMidSlots.next(newObj);
  }

  // Bottom Slots
  private gameBottomSlots = new BehaviorSubject<object>(this.mapBottomSlots);
  castBottomSlots = this.gameBottomSlots.asObservable();

  getBottomSlots(newObj) {
    this.gameBottomSlots.next(newObj)
  }


}
