import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class LogicService {


  constructor() { }

  public displayState = {
    isMenuDisplayed: true,
    isGameDisplayed: false
  }

  private displayStateObj = new BehaviorSubject<object>(this.displayState);
  castDisplayState = this.displayStateObj.asObservable();

  getDisplayState(newObj){
    this.displayStateObj.next(newObj);
  }

  //===========================SelectedCharacterId===========================//
  public selectedCharacterId = 0;

  private characterId = new BehaviorSubject<number>(this.selectedCharacterId);
  castCharacterId = this.characterId.asObservable();

  getSelectedCharacterId(newId){
    this.characterId.next(newId);
  }
  //=========================================================================//

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

  public gameDataValues = {
    money: 200000,
    income: 0,
    incomeStopped: 0,
    incomeBeforeStopped: 0,
    bonusIncome: 0,
    reduceEnergyConsumption: 0,
    bonusGameResources: 0,
    materials: 30000,
    workers: 100,
    engineers: 100,
    energy: 0,
    maxEnergy: 100,
    goal: 8000000,
    score: 0,
    appeal: 0,
    landCost: 25000,
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
        primaryIcon: 'woods',
        secondaryIcon: 'materials',
        folderIcons: 'materials',
        shopItems: [
          {
            name: "few materials",
            icon: 'material',
            cost: 5000,
            number: 100,
            id:1
          },
          {
            name: "medium pack of materials",
            icon: 'material2',
            cost: 24000,
            number: 500,
            id:2
          },
          {
            name: "huge pack of materials",
            icon: 'material3',
            cost: 45000,
            number: 1000,
            id:3
          },
        ]
      },
      {
        title: "Hire Workers",
        primaryIcon: 'workers',
        secondaryIcon: 'worker',
        folderIcons: 'workers',
        shopItems: [
          {
            name: "One Worker",
            icon: 'worker',
            cost: 30000,
            number: 1,
            id:1
          },
          {
            name: "Two Workers",
            icon: 'worker2',
            cost: 55000,
            number: 2,
            id:2
          },
          {
            name: "Three Workers",
            icon: 'worker3',
            cost: 80000,
            number: 3,
            id:3
          },
        ]
      },
      {
        title: "Hire Engineers",
        primaryIcon: 'engineers',
        secondaryIcon: 'engineer',
        folderIcons: 'engineers',
        shopItems: [
          {
            name: "One Engineer",
            icon: 'engineer',
            cost: 35000,
            number: 1,
            id:1
          },
          {
            name: "Two Engineers",
            icon: 'engineer2',
            cost: 65000,
            number: 2,
            id:2
          },
          {
            name: "Three Engineers",
            icon: 'engineer3',
            cost: 90000,
            number: 3,
            id:3
          },
        ]
      }
    ]
  }

  slotActions() {
    return [
      {
        name: "Buildings",
        folderIcons: "buildings",
        construct: [
          {
            name: "Garden",
            icon: "gardencenter",
            cost: 90000,
            workers: 27,
            materials: 3000,
            energy: 440,
            income: 9000,
            appeal:-10,
            buildingId: "HOUSE20",
            buildingType: "consumer"
          },
          {
            name: "Lumber Mill",
            icon: "lumbermill",
            cost: 120000,
            workers: 36,
            materials: 5000,
            energy: 500,
            income: 12000,
            appeal:-15,
            buildingId: "HOUSE20",
            buildingType: "consumer"
          },
          {
            name: "Recycle Center",
            icon: "recyclecenter",
            cost: 150000,
            workers: 45,
            materials: 7000,
            energy: 550,
            income: 15000,
            appeal:-15,
            buildingId: "HOUSE19",
            buildingType: "consumer"
          },
          {
            name: "Business Center",
            icon: "businesscenter",
            cost: 180000,
            workers: 54,
            materials: 9500,
            energy: 650,
            income: 18000,
            appeal:-20,
            buildingId: "HOUSE22",
            buildingType: "consumer"
          },
          {
            name: "Tech Center",
            icon: "techcenter",
            cost: 220000,
            workers: 66,
            materials: 15000,
            energy: 740,
            income: 22000,
            appeal:-20,
            buildingId: "HOUSE45",
            buildingType: "consumer"
          }
        ]
      },
      {
        name: "Houses",
        folderIcons: "houses",
        construct: [
          {
            name: "House",
            icon: "house01",
            cost: 3000,
            workers: 1,
            materials: 100,
            energy: 40,
            income: 300,
            appeal:0,
            buildingId: "HOUSE01",
            buildingType: "consumer"
          },
          {
            name: "Duplex",
            icon: "house02",
            cost: 6000,
            workers: 2,
            materials: 200,
            energy: 70,
            income: 600,
            appeal:0,
            buildingId: "HOUSE02",
            buildingType: "consumer"
          },
          {
            name: "Craftsman",
            icon: "house03",
            cost: 14000,
            workers: 4,
            materials: 450,
            energy: 145,
            income: 1400,
            appeal:0,
            buildingId: "HOUSE03",
            buildingType: "consumer"
          },
          {
            name: "Condo",
            icon: "house04",
            cost: 30000,
            workers: 9,
            materials: 950,
            energy: 220,
            income: 3000,
            appeal:0,
            buildingId: "HOUSE04",
            buildingType: "consumer"
          },
          {
            name: "Georgian",
            icon: "house05",
            cost: 60000,
            workers: 18,
            materials: 1900,
            energy: 350,
            income: 6000,
            appeal:0,
            buildingId: "HOUSE05",
            buildingType: "consumer"
          },
          {
            name: "Apartment",
            icon: "house06",
            cost: 80000,
            workers: 24,
            materials: 2500,
            energy: 400,
            income: 8000,
            appeal:0,
            buildingId: "HOUSE06",
            buildingType: "consumer"
          },
        ]
      },
      {
        name: "Marks",
        folderIcons: "marks",
        construct: [
          {
            name: "Tennis",
            icon: "tennis",
            cost: 10000,
            workers: 3,
            materials: 500,
            energy: 10,
            appeal: 10,
            income: 100,
            buildingId: "HOUSE41",
            buildingType: "consumer"
          },
          {
            name: "Pool",
            icon: "pool",
            cost: 14000,
            workers: 4,
            materials: 600,
            energy: 20,
            appeal: 15,
            income: 140,
            buildingId: "HOUSE42",
            buildingType: "consumer"
          },
          {
            name: "Minigolf",
            icon: "minigolf",
            cost: 30000,
            workers: 6,
            materials: 800,
            energy: 40,
            appeal: 20,
            income: 300,
            buildingId: "HOUSE43",
            buildingType: "consumer"
          },
          {
            name: "Amphitheater",
            icon: "amphitheater",
            cost: 40000,
            workers: 8,
            materials: 1000,
            energy: 100,
            appeal: 25,
            income: 400,
            buildingId: "HOUSE44",
            buildingType: "consumer"
          }
        ]
      },
      {
        name: "Services",
        folderIcons: "services",
        construct: [
          {
            name: "Wind",
            icon: "wind",
            cost: 10000,
            workers: 5,
            materials: 500,
            energy: 100,
            appeal: -10,
            income: 100,
            buildingId: "HOUSE37",
            buildingType: "producer"
          },
          {
            name: "Solar",
            icon: "solar",
            cost: 40000,
            workers: 12,
            materials: 1500,
            energy: 300,
            appeal: -20,
            income: 400,
            buildingId: "HOUSE38",
            buildingType: "producer"
          },
          {
            name: "Nuclear",
            icon: "nuclear",
            cost: 80000,
            workers: 40,
            materials: 4000,
            energy: 800,
            appeal: -40,
            income: 800,
            buildingId: "HOUSE40",
            buildingType: "producer"
          }
        ]
      },
      {
        name: "Shops",
        folderIcons: "shops",
        construct: [
          {
            name: "Botique",
            icon: "botique",
            cost: 240000,
            workers: 72,
            materials: 17000,
            energy: 800,
            income: 24000,
            appeal:0,
            buildingId: "HOUSE47",
            buildingType: "consumer"
          },
          {
            name: "Grocery",
            icon: "grocery",
            cost: 300000,
            workers: 90,
            materials: 22000,
            energy: 840,
            income: 30000,
            appeal:0,
            buildingId: "HOUSE48",
            buildingType: "consumer"
          },
          {
            name: "Cinema",
            icon: "cinema",
            cost: 360000,
            workers: 108,
            materials: 27000,
            energy: 920,
            income: 36000,
            appeal:0,
            buildingId: "HOUSE16",
            buildingType: "consumer"
          },
          {
            name: "Banckery",
            icon: "backery",
            cost: 500000,
            workers: 150,
            materials: 31000,
            energy: 1250,
            income: 80000,
            appeal:0,
            buildingId: "HOUSE46",
            buildingType: "consumer"
          }
        ]
      }
    ]
  }

  public characters = [
    {
      name:"Natsu",
      img:'natsu',
      id:0,
      bonuses:[
        {
          name:"Gold",
          bonusImg:"BONUS/MONEY",
          actionValue:"+",
          value:10,
          color:"green",
          procent:"%"
        },
        {
          name:"Power",
          bonusImg:"BONUS/POWER",
          actionValue:"",
          color:"red",
          value:-10,
          procent:"%"
        },
        {
          name:"Resources",
          bonusImg:"BONUS/RESOURCE",
          actionValue:"",
          color:"red",
          value:-10,
          procent:"%"
        },
      ]
    },
    {
      name:"Lucy",
      img:'lucy',
      id:1,
      bonuses:[
        {
          name:"Gold",
          bonusImg:"BONUS/MONEY",
          actionValue:"+",
          color:"green",
          value:5,
          procent:"%"
        },
        {
          name:"Power",
          bonusImg:"BONUS/POWER",
          actionValue:"",
          color:"green",
          value:5,
          procent:"%"
        },
        {
          name:"Resources",
          bonusImg:"BONUS/RESOURCE",
          actionValue:"",
          color:"red",
          value:-5,
          procent:"%"
        },
      ]
    },
    {
      name:"Gray",
      img:'gray',
      id:2,
      bonuses:[
        {
          name:"Gold",
          bonusImg:"BONUS/MONEY",
          actionValue:"+",
          color:"green",
          value:5,
          procent:"%"
        },
        {
          name:"Power",
          bonusImg:"BONUS/POWER",
          actionValue:"",
          color:"red",
          value:-10,
          procent:"%"
        },
        {
          name:"Resources",
          bonusImg:"BONUS/RESOURCE",
          actionValue:"+",
          color:"green",
          value:10,
          procent:"%"
        },
      ]
    },
    {
      name:"Erza",
      img:'erza',
      id:3,
      bonuses:[
        {
          name:"Gold",
          bonusImg:"BONUS/MONEY",
          actionValue:"",
          color:"red",
          value:-5,
          procent:"%"
        },
        {
          name:"Power",
          bonusImg:"BONUS/POWER",
          actionValue:"",
          color:"red",
          value:-10,
          procent:"%"
        },
        {
          name:"Resources",
          bonusImg:"BONUS/RESOURCE",
          actionValue:"+",
          color:"green",
          value:20,
          procent:"%"
        },
      ]
    }
  ]
  private gameCharacters = new BehaviorSubject<object>(this.characters);
  castCharacters = this.gameCharacters.asObservable();

  // Game Land Slots
  public mapTopSlots = [
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg: "UPGRADE/NOUPDATE",
      starUpdateImg: "UPGRADE/NOUPDATE",
      needRepair: false,
      income: 0,
      energy: 0,
      maxEnergy: 0,
      cost:0,
      appeal:0,
      buildingType:"consumer",
      number: 0
    },
    {
      img: "HOUSE0/NONE1",
      condition: "bought",
      energyUpdateImg: "UPGRADE/NOUPDATE",
      starUpdateImg: "UPGRADE/NOUPDATE",
      needRepair: false,
      income: 0,
      energy: 0,
      maxEnergy: 0,
      cost:0,
      appeal:0,
      buildingType:"consumer",
      number: 1
    },
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg: "UPGRADE/NOUPDATE",
      starUpdateImg: "UPGRADE/NOUPDATE",
      needRepair: false,
      income: 0,
      energy: 0,
      maxEnergy: 0,
      cost:0,
      appeal:0,
      buildingType:"consumer",
      number: 2
    },
    {
      img: "HOUSE0/NONE1",
      condition: "bought",
      energyUpdateImg: "UPGRADE/NOUPDATE",
      starUpdateImg: "UPGRADE/NOUPDATE",
      needRepair: false,
      income: 0,
      energy: 0,
      maxEnergy: 0,
      cost:0,
      appeal:0,
      buildingType:"consumer",
      number: 3
    },
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg: "UPGRADE/NOUPDATE",
      starUpdateImg: "UPGRADE/NOUPDATE",
      needRepair: false,
      income: 0,
      energy: 0,
      maxEnergy: 0,
      cost:0,
      appeal:0,
      buildingType:"consumer",
      number: 4
    },
  ]
  public mapMidSlots = [
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg: "UPGRADE/NOUPDATE",
      starUpdateImg: "UPGRADE/NOUPDATE",
      needRepair: false,
      income: 0,
      energy: 0,
      maxEnergy: 0,
      cost:0,
      appeal:0,
      buildingType:"consumer",
      number: 5
    },
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg: "UPGRADE/NOUPDATE",
      starUpdateImg: "UPGRADE/NOUPDATE",
      needRepair: false,
      income: 0,
      energy: 0,
      maxEnergy: 0,
      cost:0,
      appeal:0,
      buildingType:"consumer",
      number: 6
    },
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg: "UPGRADE/NOUPDATE",
      starUpdateImg: "UPGRADE/NOUPDATE",
      needRepair: false,
      income: 0,
      energy: 0,
      maxEnergy: 0,
      cost:0,
      appeal:0,
      buildingType:"consumer",
      number: 7
    },
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg: "UPGRADE/NOUPDATE",
      starUpdateImg: "UPGRADE/NOUPDATE",
      needRepair: false,
      income: 0,
      energy: 0,
      maxEnergy: 0,
      cost:0,
      appeal:0,
      buildingType:"consumer",
      number: 8
    },
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg: "UPGRADE/NOUPDATE",
      starUpdateImg: "UPGRADE/NOUPDATE",
      needRepair: false,
      income: 0,
      energy: 0,
      maxEnergy: 0,
      cost:0,
      appeal:0,
      buildingType:"consumer",
      number: 9
    }
  ]
  public mapBottomSlots = [
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg: "UPGRADE/NOUPDATE",
      starUpdateImg: "UPGRADE/NOUPDATE",
      needRepair: false,
      income: 0,
      energy: 0,
      maxEnergy: 0,
      cost:0,
      appeal:0,
      buildingType:"consumer",
      number: 10
    },
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg: "UPGRADE/NOUPDATE",
      starUpdateImg: "UPGRADE/NOUPDATE",
      needRepair: false,
      income: 0,
      energy: 0,
      maxEnergy: 0,
      cost:0,
      appeal:0,
      buildingType:"consumer",
      number: 11
    },
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg: "UPGRADE/NOUPDATE",
      starUpdateImg: "UPGRADE/NOUPDATE",
      needRepair: false,
      income: 0,
      energy: 0,
      maxEnergy: 0,
      cost:0,
      appeal:0,
      buildingType:"consumer",
      number: 12
    },
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg: "UPGRADE/NOUPDATE",
      starUpdateImg: "UPGRADE/NOUPDATE",
      needRepair: false,
      income: 0,
      energy: 0,
      maxEnergy: 0,
      cost:0,
      appeal:0,
      buildingType:"consumer",
      number: 13
    },
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg: "UPGRADE/NOUPDATE",
      starUpdateImg: "UPGRADE/NOUPDATE",
      needRepair: false,
      income: 0,
      energy: 0,
      maxEnergy: 0,
      cost:0,
      appeal:0,
      buildingType:"consumer",
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
