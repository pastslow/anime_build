import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class LogicService {


  constructor() { }

  public currentSlotId = 0;

  private slotId = new BehaviorSubject<number>(this.currentSlotId);
  castSlotId = this.slotId.asObservable();

  getSlotId(newId) {
    this.slotId.next(newId);
  }

  public gameDataValues = {
    money: 400000,
    income: 0,
    incomeStopped:0,
    incomeBeforeStopped:0,
    bonusIncome: 10,
    reduceEnergyConsumption: 0,
    materials: 10000,
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
        bonusTitle: "Bonus materials:",
        bonusValue: 10,
        primaryIcon: 'woods',
        secondaryIcon: 'materials',
        folderIcons: 'materials',
        shopItems: [
          {
            name: "few materials",
            icon: 'material',
            cost: 5000,
            number: 100
          },
          {
            name: "medium pack of materials",
            icon: 'material2',
            cost: 24000,
            number: 500
          },
          {
            name: "huge pack of materials",
            icon: 'material3',
            cost: 45000,
            number: 1000
          },
        ]
      },
      {
        title: "Hire Workers",
        bonusTitle: "Reduce workers cost by:",
        bonusValue: 10,
        primaryIcon: 'workers',
        secondaryIcon: 'worker',
        folderIcons: 'workers',
        shopItems: [
          {
            name: "One Worker",
            icon: 'worker',
            cost: 30000,
            number: 1
          },
          {
            name: "Two Workers",
            icon: 'worker2',
            cost: 55000,
            number: 2
          },
          {
            name: "Three Workers",
            icon: 'worker3',
            cost: 80000,
            number: 3
          },
        ]
      },
      {
        title: "Hire Engineers",
        primaryIcon: 'engineers',
        secondaryIcon: 'engineer',
        folderIcons: 'engineers',
        bonusTitle: "Reduce engineers cost by:",
        bonusValue: 10,
        shopItems: [
          {
            name: "One Engineer",
            icon: 'engineer',
            cost: 35000,
            number: 1
          },
          {
            name: "Two Engineers",
            icon: 'engineer2',
            cost: 65000,
            number: 2
          },
          {
            name: "Three Engineers",
            icon: 'engineer3',
            cost: 90000,
            number: 3
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
            cost: 15000,
            workers: 4,
            materials: 300,
            energy: 50,
            income: 400,
            buildingId: "HOUSE20",
            buildingType:"consumer"
          },
          {
            name: "Lumber Mill",
            icon: "lumbermill",
            cost: 35000,
            workers: 6,
            materials: 500,
            energy: 100,
            income: 900,
            buildingId: "HOUSE20",
            buildingType:"consumer"
          },
          {
            name: "Recycle Center",
            icon: "recyclecenter",
            cost: 45000,
            workers: 8,
            materials: 800,
            energy: 120,
            income: 1200,
            buildingId: "HOUSE19",
            buildingType:"consumer"
          },
          {
            name: "Business Center",
            icon: "businesscenter",
            cost: 60000,
            workers: 15,
            materials: 2000,
            energy: 200,
            income: 1600,
            buildingId: "HOUSE22",
            buildingType:"consumer"
          },
          {
            name: "Tech Center",
            icon: "techcenter",
            cost: 90000,
            workers: 30,
            materials: 4000,
            energy: 400,
            income: 2200,
            buildingId: "HOUSE45",
            buildingType:"consumer"
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
            buildingId: "HOUSE01",
            buildingType:"consumer"
          },
          {
            name: "Duplex",
            icon: "house02",
            cost: 6500,
            workers: 2,
            materials: 200,
            energy: 60,
            income: 650,
            buildingId: "HOUSE02",
            buildingType:"consumer"
          },
          {
            name: "Craftsman",
            icon: "house03",
            cost: 14000,
            workers: 4,
            materials: 350,
            energy: 80,
            income: 1400,
            buildingId: "HOUSE03",
            buildingType:"consumer"
          },
          {
            name: "Condo",
            icon: "house04",
            cost: 30000,
            workers: 6,
            materials: 560,
            energy: 90,
            income: 3000,
            buildingId: "HOUSE04",
            buildingType:"consumer"
          },
          {
            name: "Georgian",
            icon: "house05",
            cost: 40000,
            workers: 10,
            materials: 1200,
            energy: 140,
            income: 4000,
            buildingId: "HOUSE05",
            buildingType:"consumer"
          },
          {
            name: "Apartment",
            icon: "house06",
            cost: 80000,
            workers: 25,
            materials: 2200,
            energy: 250,
            income: 8000,
            buildingId: "HOUSE06",
            buildingType:"consumer"
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
            income: 1000,
            buildingId: "HOUSE41",
            buildingType:"consumer"
          },
          {
            name: "Pool",
            icon: "pool",
            cost: 14000,
            workers: 4,
            materials: 600,
            energy: 20,
            appeal: 15,
            income: 1400,
            buildingId: "HOUSE42",
            buildingType:"consumer"
          },
          {
            name: "Minigolf",
            icon: "minigolf",
            cost: 30000,
            workers: 6,
            materials: 800,
            energy: 40,
            appeal: 20,
            income: 3000,
            buildingId: "HOUSE43",
            buildingType:"consumer"
          },
          {
            name: "Amphitheater",
            icon: "amphitheater",
            cost: 40000,
            workers: 8,
            materials: 1000,
            energy: 100,
            appeal: 25,
            income: 4000,
            buildingId: "HOUSE44",
            buildingType:"consumer"
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
            appeal: 10,
            income: 100,
            buildingId: "HOUSE37",
            buildingType:"producer"
          },
          {
            name: "Solar",
            icon: "solar",
            cost: 40000,
            workers: 12,
            materials: 1500,
            energy: 300,
            appeal: 20,
            income: 400,
            buildingId: "HOUSE38",
            buildingType:"producer"
          },
          {
            name: "Nuclear",
            icon: "nuclear",
            cost: 80000,
            workers: 40,
            materials: 4000,
            energy: 800,
            appeal: 40,
            income: 800,
            buildingId: "HOUSE40",
            buildingType:"producer"
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
            cost: 40000,
            workers: 8,
            materials: 500,
            energy: 100,
            income: 4000,
            buildingId: "HOUSE47",
            buildingType:"consumer"
          },
          {
            name: "Grocery",
            icon: "grocery",
            cost: 60000,
            workers: 16,
            materials: 1000,
            energy: 250,
            income: 6000,
            buildingId: "HOUSE48",
            buildingType:"consumer"
          },
          {
            name: "Cinema",
            icon: "cinema",
            cost: 85000,
            workers: 20,
            materials: 3000,
            energy: 550,
            income: 8500,
            buildingId: "HOUSE16",
            buildingType:"consumer"
          },
          {
            name: "Banckery",
            icon: "backery",
            cost: 98000,
            workers: 32,
            materials: 5000,
            energy: 700,
            income: 9800,
            buildingId: "HOUSE46",
            buildingType:"consumer"
          }
        ]
      }
    ]
  }

  // Game Land Slots
  public mapTopSlots = [
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg:"NOUPDATE",
      income: 0,
      energy:0,
      maxEnergy:0,
      number: 0
    },
    {
      img: "HOUSE0/NONE1",
      condition: "bought",
      energyUpdateImg:"NOUPDATE",
      income: 0,
      energy:0,
      maxEnergy:0,
      number: 1
    },
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg:"NOUPDATE",
      income: 0,
      energy:0,
      maxEnergy:0,
      number: 2
    },
    {
      img: "HOUSE0/NONE1",
      condition: "bought",
      energyUpdateImg:"NOUPDATE",
      income: 0,
      energy:0,
      maxEnergy:0,
      number: 3
    },
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg:"NOUPDATE",
      income: 0,
      energy:0,
      maxEnergy:0,
      number: 4
    },
  ]
  public mapMidSlots = [
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg:"NOUPDATE",
      income: 0,
      energy:0,
      maxEnergy:0,
      number: 5
    },
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg:"NOUPDATE",
      income: 0,
      energy:0,
      maxEnergy:0,
      number: 6
    },
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg:"NOUPDATE",
      income: 0,
      energy:0,
      maxEnergy:0,
      number: 7
    },
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg:"NOUPDATE",
      income: 0,
      energy:0,
      maxEnergy:0,
      number: 8
    },
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg:"NOUPDATE",
      income: 0,
      energy:0,
      maxEnergy:0,
      number: 9
    }
  ]
  public mapBottomSlots = [
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg:"NOUPDATE",
      income: 0,
      energy:0,
      maxEnergy:0,
      number: 10
    },
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg:"NOUPDATE",
      income: 0,
      energy:0,
      maxEnergy:0,
      number: 11
    },
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg:"NOUPDATE",
      income: 0,
      energy:0,
      maxEnergy:0,
      number: 12
    },
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg:"NOUPDATE",
      income: 0,
      energy:0,
      maxEnergy:0,
      number: 13
    },
    {
      img: "HOUSE0/NONE0",
      condition: "empty",
      energyUpdateImg:"NOUPDATE",
      income: 0,
      energy:0,
      maxEnergy:0,
      number: 14
    }
  ]

  // Top slots
  private gameTopSlots = new BehaviorSubject<object>(this.mapTopSlots)
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
