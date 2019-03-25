import { Component, OnInit } from '@angular/core';
import { LogicService } from 'src/app/logic.service';
import {
  ambient, sasuke, kakashi, itachi, kaneki, akatsuki,
  kaguya, madara, mikasa, orochimaru, tsunade
} from '../../misc/const';
import { GameSlotsService } from 'src/app/game-slots.service';
import { GameCharactersService } from 'src/app/game-characters.service';
import { GameVisitorsService } from 'src/app/game-visitors.service';

@Component({
  selector: 'app-calendar-events',
  templateUrl: './calendar-events.component.html',
  styleUrls: ['./calendar-events.component.css']
})
export class CalendarEventsComponent implements OnInit {

  public eventNumber = 0;
  public eventTime = 90000;
  public gameData;

  public topSlots;
  public midSlots;
  public bottomSlots;

  public characterSelectedId;
  public gameCharacters;

  public allGameSlots;

  public gameTime;

  public calendarEvents;

  constructor(private _logicService: LogicService,
    private _slotsService: GameSlotsService,
    private _gameVisitors: GameVisitorsService,
    private _charactersService: GameCharactersService) {

    this._logicService.cast.subscribe(
      gameValues => this.gameData = gameValues);

    this.calendarEvents = this._gameVisitors.getGameVisitors();

    this._slotsService.castTopSlots.subscribe(
      gameTopSlots => this.topSlots = gameTopSlots);

    this._slotsService.castMidSlots.subscribe(
      gameMidSlots => this.midSlots = gameMidSlots);

    this._slotsService.castBottomSlots.subscribe(
      gameBottomSlots => this.bottomSlots = gameBottomSlots);

    this.allGameSlots = this.topSlots.concat(this.midSlots, this.bottomSlots);

    this._charactersService.castCharacters.subscribe(
      gameCharacters => this.gameCharacters = gameCharacters);

    this._charactersService.castCharacterId.subscribe(
      characterId => this.characterSelectedId = characterId);

    this._logicService.castGameTime.subscribe(
      stopWatchObj => this.gameTime = stopWatchObj);

  }

  ngOnInit() {
    this.changeEvent();
  }

 // -------------------- Bonuses and events from visitors ------------------ //
  changeBonusesInGame(bonusName, value) {
    this.gameData[bonusName] = this.gameData[bonusName] + value;
    setTimeout(() => {
      this.gameData[bonusName] = this.gameData[bonusName] - value;
    }, this.eventTime - 2000);
  }

  changeResourcesInGameByProcent(resource, procent) {
    let newResourceValue = (
      Math.round((this.gameData[resource] * procent) / 100));
    this.gameData[resource] = this.gameData[resource] + newResourceValue;
  }

  changeResourcesInGameByValue(value) {
    this.gameData.money = this.gameData.money + value;
  }

  castCurseOnCharacter(curseValue) {
    let selectedCharacter = this.gameCharacters[this.characterSelectedId];

    if (selectedCharacter.cursed === true) {
      return;
    }
    selectedCharacter.cursed = true;

    let characterIncomeBonus = (
      selectedCharacter.bonuses.find(
        elem => elem.name === "Gold"
      ));

    let characterEnergyBonus = (
      selectedCharacter.bonuses.find(
        elem => elem.name === "Power"
      ))

    characterIncomeBonus.value = characterIncomeBonus.value - curseValue;
    characterEnergyBonus.value = characterEnergyBonus.value - curseValue;

    this.gameData.bonusIncome = this.gameData.bonusIncome - curseValue;
    this.gameData.reduceEnergyConsumption = (
      this.gameData.reduceEnergyConsumption - curseValue);
  }

  getRidOfTheCurse(cureValue) {
    let selectedCharacter = this.gameCharacters[this.characterSelectedId];

    if (selectedCharacter.cursed === false) {
      return;
    }

    selectedCharacter.cursed = false;

    let characterIncomeBonus = (
      selectedCharacter.bonuses.find(
        elem => elem.name === "Gold"
      ));

    let characterEnergyBonus = (
      selectedCharacter.bonuses.find(
        elem => elem.name === "Power"
      ));

    characterIncomeBonus.value = characterIncomeBonus.value + cureValue;
    characterEnergyBonus.value = characterEnergyBonus.value + cureValue;

    this.gameData.bonusIncome = this.gameData.bonusIncome + cureValue;
    this.gameData.reduceEnergyConsumption = (
      this.gameData.reduceEnergyConsumption + cureValue);
  }

  breakSomethingInConstruction() {
    let allBuildings = (
      this.allGameSlots.filter(elem => elem.condition == "build"));

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

      this.gameData.incomeBeforeStopped = (
        this.gameData.incomeBeforeStopped - afectedIncome);
    }

  }

  changeNumberOfEventByName(eventName) {
    this.eventNumber = this.calendarEvents.findIndex(
      elem => elem.name === eventName);
  }

  changeEvent() {

    setInterval(() => {
      let event = Math.floor(Math.random() * this.calendarEvents.length);
      this.eventNumber = event;
      let eventName = this.calendarEvents[event].name;

      if (this.gameTime.minutes < 15 && (eventName === "Orochimaru" ||
        eventName === "Tsunade")) {
        eventName = "Mikasa";
        this.changeNumberOfEventByName("Mikasa");
        return;
      }

      if (this.gameData.appeal < -100 && eventName === "Mikasa") {
        eventName = "Orochimaru";
        this.changeNumberOfEventByName("Orochimaru");
        return;
      }

      if (this.gameData.appeal < -200 && eventName === "Kakashi") {
        eventName = "Madara";
        this.changeNumberOfEventByName("Madara");
        return;
      }

      if (this.gameData.appeal < -250 && eventName === "No visitator") {
        eventName = "Akatsuki";
        this.changeNumberOfEventByName("Akatsuki");
        return;
      }

      this.currentVisitatorBonus(eventName);

    }, this.eventTime);
  }

  currentVisitatorBonus(visitatorName) {
    if (visitatorName === "Sasuke") {
      sasuke.play();
      this.changeBonusesInGame('bonusIncome', 10);
      return;
    }
    if (visitatorName === "No visitator") {
      ambient.play();
      return;
    }
    if (visitatorName === "Kakashi") {
      kakashi.play();
      this.changeResourcesInGameByProcent("materials", 10);
      return;
    }
    if (visitatorName === "Mikasa") {
      mikasa.play();
      this.changeResourcesInGameByProcent("money", 10);
      return;
    }
    if (visitatorName === "Itachi") {
      itachi.play();
      this.changeBonusesInGame('bonusGameResources', 15);
      return;
    }
    if (visitatorName === "Kaneki") {
      kaneki.play();
      this.changeBonusesInGame('reduceEnergyConsumption', 10);
      return;
    }
    if (visitatorName === "Akatsuki") {
      akatsuki.play();
      this.changeResourcesInGameByProcent("money", -40);
      this.changeResourcesInGameByProcent("materials", -20);
      return;
    }
    if (visitatorName === "Kaguya") {
      kaguya.play();
      this.changeBonusesInGame('bonusIncome', -10);
      this.changeBonusesInGame('bonusGameResources', -20);
      this.changeBonusesInGame('reduceEnergyConsumption', -10);
      return;
    }
    if (visitatorName === "Madara") {
      madara.play();
      this.breakSomethingInConstruction();
      return;
    }
    if (visitatorName === "Orochimaru") {
      orochimaru.play();
      this.castCurseOnCharacter(5);
      return;
    }
    if (visitatorName === "Tsunade") {
      tsunade.play();
      this.getRidOfTheCurse(5);
      return;
    }

  }

}
