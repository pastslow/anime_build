import { Component, OnInit } from '@angular/core';
import { LogicService } from 'src/app/logic.service';

@Component({
  selector: 'app-calendar-events',
  templateUrl: './calendar-events.component.html',
  styleUrls: ['./calendar-events.component.css']
})
export class CalendarEventsComponent implements OnInit {

  public eventNumber = 0;
  public eventTime = 10000;
  public gameData;

  public topSlots;
  public midSlots;
  public bottomSlots;

  public allGameSlots;

  public calendarEvents = [
    {
      name: "Sasuke",
      img: "SASUKE",
      description: `I'm one of the most powerful man in the world,
       and I will help you to build at lower price.`,
      bonuses: [
        {
          img: "INCOME",
          value: 10,
          sign: "+",
          procent: "%"
        }
      ]
    },
    {
      name: "Kakashi",
      img: "KAKASHI",
      description: `I'm one of Konoha's most talented person
      and I will help you to buy more materials at the same price.`,
      bonuses: [
        {
          img: "MATERIALS",
          value: 10,
          sign: "+",
          procent: "%"
        }
      ]
    },
    {
      name: "Mikasa",
      img: "MIKASA",
      description: `I'm here only to help you, not to stay in your way
       this is why I brought you something.`,
      bonuses: [
        {
          img: "MONEY",
          value: 10,
          sign: "+",
          procent: ""
        }
      ]
    },
    {
      name: "Itachi",
      img: "ITACHI",
      description: `I live at a distance, observing individuals and ideas.
       I'm the most wanted criminal but not everyone know my real secret.
      `,
      bonuses: [
        {
          img: "RESOURCE",
          value: 15,
          sign: "",
          procent: "%"
        }]
    },
    {
      name: "Kaneki",
      img: "KANEKI",
      description: `As a member of Anteiku I will help you
       to construct buildings with less energy consumption.`,
      bonuses: [
        {
          img: "POWER",
          value: 10,
          sign: "",
          procent: "%"
        }]
    },
    {
      name: "Akatsuki",
      img: "AKATSUKI",
      description: `A criminal organisation now came to your place.
       They had steal from you money and materials.`,
      bonuses: [
        {
          img: "MONEY",
          value: -10,
          sign: "",
          procent: "%"
        },
        {
          img: "MATERIALS",
          value: -10,
          sign: "",
          procent: "%"
        }]
    },
    {
      name: "Kaguya",
      img: "KAGUYA",
      description: `Princess Kaguya has lost all faith in humanity and 
      she has swear to bring them only bad luck.`,
      bonuses: [
        {
          img: "INCOME",
          value: -10,
          sign: "",
          procent: "%"
        },
        {
          img: "POWER",
          value: -10,
          sign: "",
          procent: "%"
        },
        {
          img: "RESOURCE",
          value: -20,
          sign: "",
          procent: "%"
        }]
    },
    {
      name: "Madara",
      img: "MADARA",
      description: `This visitator is very dangerous
       and it has a 50% chance to break something.`,
      bonuses: [
        {
          img: "SAD",
          value: "",
          sign: "",
          procent: ""
        }
      ]
    },
  ]

  constructor(private _logicService: LogicService) {
    this._logicService.cast.subscribe(gameValues => this.gameData = gameValues);

    this._logicService.castTopSlots.subscribe(
      gameTopSlots => this.topSlots = gameTopSlots);
    this._logicService.castMidSlots.subscribe(
      gameMidSlots => this.midSlots = gameMidSlots);
    this._logicService.castBottomSlots.subscribe(
      gameBottomSlots => this.bottomSlots = gameBottomSlots);

    this.allGameSlots = this.topSlots.concat(this.midSlots, this.bottomSlots);
  }

  ngOnInit() {
    this.changeEvent();
  }

  changeBonusesInGame(bonusName, value) {
    this.gameData[bonusName] = this.gameData[bonusName] + value;
    setTimeout(() => {
      this.gameData[bonusName] = this.gameData[bonusName] - value;
    }, this.eventTime - 2000);
  }

  changeResourcesInGameByProcent(resource, procent) {
    let newResourceValue = Math.round((this.gameData[resource] * procent) / 100);
    this.gameData[resource] = this.gameData[resource] + newResourceValue;
  }

  changeResourcesInGameByValue(value) {
    this.gameData.money = this.gameData.money + value;
  }

  breakSomethingInConstruction() {
    let allBuildings = this.allGameSlots.filter(elem => elem.condition == "build");

    if (allBuildings === undefined || allBuildings.length == 0) {
      return;
    }

    if (this.gameData.energy > this.gameData.maxEnergy) {
      return;
    }

    let constructionId = Math.floor(Math.random() * allBuildings.length);

    let buildingRepariStatus = allBuildings[constructionId].needRepair;

    if (buildingRepariStatus === false) {
      allBuildings[constructionId].needRepair = true;

      let afectedIncome = allBuildings[constructionId].income / 2;

      allBuildings[constructionId].income = afectedIncome;
      allBuildings[constructionId].repairImg = "UPGRADE/REPAIR/REPAIR_KEY";
      this.gameData.income = this.gameData.income - afectedIncome;
      this.gameData.incomeBeforeStopped = this.gameData.incomeBeforeStopped - afectedIncome;
    }

  }

  changeEvent() {

    setInterval(() => {
      let event = Math.floor(Math.random() * this.calendarEvents.length);
      this.eventNumber = event;
      let eventName = this.calendarEvents[event].name;

      this.currentVisitatorBonus(eventName);

    }, this.eventTime);
  }

  currentVisitatorBonus(visitatorName) {
    if (visitatorName === "Sasuke") {
      this.changeBonusesInGame('bonusIncome', 10);
      return;
    }
    if (visitatorName === "Kakashi") {
      this.changeResourcesInGameByProcent("materials", 10);
      return;
    }
    if (visitatorName === "Mikasa") {
      this.changeResourcesInGameByProcent("money", 10);
      return;
    }
    if (visitatorName === "Itachi") {
      this.changeBonusesInGame('bonusGameResources', 15);
      return;
    }
    if (visitatorName === "Kaneki") {
      this.changeBonusesInGame('reduceEnergyConsumption', 10);
      return;
    }

    if (visitatorName === "Akatsuki") {
      this.changeResourcesInGameByProcent("money", -10);
      this.changeResourcesInGameByProcent("materials", -10);
      return;
    }

    if (visitatorName === "Kaguya") {
      this.changeBonusesInGame('bonusIncome', -10);
      this.changeBonusesInGame('bonusGameResources', -20);
      this.changeBonusesInGame('reduceEnergyConsumption', -10);
      return;
    }

    if (visitatorName === "Madara") {
      this.breakSomethingInConstruction();
      return;
    }

  }

}
