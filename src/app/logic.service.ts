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
  //--------------------- Menu and game display settings --------------------//
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
  //--------------------------- All game values ---------------------------- //
  public gameDataValues = {
    money: 50000,
    income: 0,
    incomeStopped: 0,
    incomeBeforeStopped: 0,
    bonusIncome: 0,
    reduceEnergyConsumption: 0,
    bonusGameResources: 0,
    materials: 300,
    workers: 3,
    engineers: 2,
    energy: 0,
    maxEnergy: 150,
    goal: 80000000,
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
}