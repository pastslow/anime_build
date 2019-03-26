import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameBuildingsService {

  constructor() { }
// ---------------------------- All game buildings ------------------------- //
  getGameBuildings() {
    return [
      {
        name: "Buildings",
        folderIcons: "BUILDINGS",
        construct: [
          {
            name: "Garden",
            icon: "GARDEN_CENTER",
            cost: 180000,
            workers: 22,
            materials: 6400,
            energy: 440,
            income: 9000,
            appeal: -10,
            appealImg: "UPGRADE/NEGATIVE_APPEAL/NEG_10",
            buildingId: "HOUSE20",
            buildingType: "consumer"
          },
          {
            name: "Lumber Mill",
            icon: "LUMBER_MILL",
            cost: 270000,
            workers: 36,
            materials: 12800,
            energy: 500,
            income: 12000,
            appeal: -15,
            appealImg: "UPGRADE/NEGATIVE_APPEAL/NEG_15",
            buildingId: "HOUSE09",
            buildingType: "consumer"
          },
          {
            name: "Recycle Center",
            icon: "RECYCLE_CENTER",
            cost: 360000,
            workers: 45,
            materials: 25000,
            energy: 550,
            income: 15000,
            appeal: -15,
            appealImg: "UPGRADE/NEGATIVE_APPEAL/NEG_15",
            buildingId: "HOUSE19",
            buildingType: "consumer"
          },
          {
            name: "Business Center",
            icon: "BUSINESS_CENTER",
            cost: 540000,
            workers: 54,
            materials: 35000,
            energy: 650,
            income: 18000,
            appeal: -20,
            appealImg: "UPGRADE/NEGATIVE_APPEAL/NEG_20",
            buildingId: "HOUSE22",
            buildingType: "consumer"
          },
          {
            name: "Tech Center",
            icon: "TECH_CENTER",
            cost: 720000,
            workers: 72,
            materials: 70000,
            energy: 740,
            income: 22000,
            appeal: -20,
            appealImg: "UPGRADE/NEGATIVE_APPEAL/NEG_20",
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
            appealImg: "UPGRADE/NOUPDATE",
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
            appealImg: "UPGRADE/NOUPDATE",
            buildingId: "HOUSE02",
            buildingType: "consumer"
          },
          {
            name: "Craftsman",
            icon: "HOUSE_03",
            cost: 12000,
            workers: 3,
            materials: 400,
            energy: 145,
            income: 1000,
            appeal: 0,
            appealImg: "UPGRADE/NOUPDATE",
            buildingId: "HOUSE03",
            buildingType: "consumer"
          },
          {
            name: "Condo",
            icon: "HOUSE_04",
            cost: 24000,
            workers: 6,
            materials: 800,
            energy: 220,
            income: 2000,
            appeal: 0,
            appealImg: "UPGRADE/NOUPDATE",
            buildingId: "HOUSE04",
            buildingType: "consumer"
          },
          {
            name: "Georgian",
            icon: "HOUSE_05",
            cost: 48000,
            workers: 8,
            materials: 1900,
            energy: 350,
            income: 4000,
            appeal: 0,
            appealImg: "UPGRADE/NOUPDATE",
            buildingId: "HOUSE05",
            buildingType: "consumer"
          },
          {
            name: "Apartment",
            icon: "HOUSE_06",
            cost: 96000,
            workers: 12,
            materials: 3200,
            energy: 400,
            income: 8000,
            appeal: 0,
            appealImg: "UPGRADE/NOUPDATE",
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
            workers: 2,
            materials: 300,
            energy: 10,
            appeal: 10,
            appealImg: "UPGRADE/POSITIVE_APPEAL/POS_10",
            income: 200,
            buildingId: "HOUSE41",
            buildingType: "consumer"
          },
          {
            name: "Pool",
            icon: "POOL",
            cost: 40000,
            workers: 14,
            materials: 1500,
            energy: 20,
            appeal: 15,
            appealImg: "UPGRADE/POSITIVE_APPEAL/POS_15",
            income: 1000,
            buildingId: "HOUSE42",
            buildingType: "consumer"
          },
          {
            name: "Minigolf",
            icon: "MINIGOLF",
            cost: 80000,
            workers: 28,
            materials: 6000,
            energy: 40,
            appeal: 20,
            appealImg: "UPGRADE/POSITIVE_APPEAL/POS_20",
            income: 1500,
            buildingId: "HOUSE43",
            buildingType: "consumer"
          },
          {
            name: "Amphitheater",
            icon: "AMPHITHEATER",
            cost: 200000,
            workers: 40,
            materials: 10000,
            energy: 100,
            appeal: 25,
            appealImg: "UPGRADE/POSITIVE_APPEAL/POS_25",
            income: 3000,
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
            workers: 4,
            materials: 500,
            energy: 200,
            appeal: -10,
            appealImg: "UPGRADE/NEGATIVE_APPEAL/NEG_10",
            income: 500,
            buildingId: "HOUSE37",
            buildingType: "producer"
          },
          {
            name: "Solar",
            icon: "SOLAR",
            cost: 80000,
            workers: 15,
            materials: 8000,
            energy: 600,
            appeal: -20,
            appealImg: "UPGRADE/NEGATIVE_APPEAL/NEG_20",
            income: 2000,
            buildingId: "HOUSE38",
            buildingType: "producer"
          },
          {
            name: "Nuclear",
            icon: "NUCLEAR",
            cost: 500000,
            workers: 50,
            materials: 25000,
            energy: 2500,
            appeal: -40,
            appealImg: "UPGRADE/NEGATIVE_APPEAL/NEG_40",
            income: 5000,
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
            cost: 1440000,
            workers: 100,
            materials: 90000,
            energy: 800,
            income: 24000,
            appeal: 0,
            appealImg: "UPGRADE/NOUPDATE",
            buildingId: "HOUSE47",
            buildingType: "consumer"
          },
          {
            name: "Grocery",
            icon: "GROCERY",
            cost: 2200000,
            workers: 126,
            materials: 160000,
            energy: 840,
            income: 30000,
            appeal: 0,
            appealImg: "UPGRADE/NOUPDATE",
            buildingId: "HOUSE48",
            buildingType: "consumer"
          },
          {
            name: "Cinema",
            icon: "CINEMA",
            cost: 2900000,
            workers: 165,
            materials: 240000,
            energy: 920,
            income: 36000,
            appeal: 0,
            appealImg: "UPGRADE/NOUPDATE",
            buildingId: "HOUSE16",
            buildingType: "consumer"
          },
          {
            name: "Backery",
            icon: "BACKERY",
            cost: 4500000,
            workers: 200,
            materials: 400000,
            energy: 1250,
            income: 80000,
            appeal: 0,
            appealImg: "UPGRADE/NOUPDATE",
            buildingId: "HOUSE46",
            buildingType: "consumer"
          }
        ]
      }
    ]
  }
}
