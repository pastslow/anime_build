import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class GameCharactersService {

  constructor() { }

  // --------------------- User selected character id ---------------------- //
  public selectedCharacterId = 0;

  private characterId = new BehaviorSubject<number>(this.selectedCharacterId);
  castCharacterId = this.characterId.asObservable();

  getSelectedCharacterId(newId) {
    this.characterId.next(newId);
  }
  // ------------------------ All game characters -------------------------- //
  public characters = [
    {
      name: "Natsu",
      img: 'NATSU',
      cursed: false,
      id: 0,
      audio: ["NATSU_01", "NATSU_02", "NATSU_03"],
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
          description: "New constructions income ",
          procent: "%"
        },
        {
          name: "Power",
          bonusImg: "BONUS/POWER",
          color: "red",
          description: "New constructions energy consumption ",
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
      cursed: false,
      id: 1,
      audio: ["LUCY_01", "LUCY_02", "LUCY_03"],
      info: `
      Using my power you will obtain less materials, workers and engineers
      but you will construct buildings which produce greater income
      and use less energy.`,
      bonuses: [
        {
          name: "Gold",
          bonusImg: "BONUS/INCOME",
          color: "green",
          description: "New constructions income ",
          value: 5,
          procent: "%"
        },
        {
          name: "Power",
          bonusImg: "BONUS/POWER",
          color: "green",
          description: "New constructions energy consumption ",
          value: 5,
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
      name: "Gray",
      img: 'GRAY',
      cursed: false,
      id: 2,
      audio: ["GRAY_01", "GRAY_02", "GRAY_03"],
      info: `
      Using my power you will obtain more materials, workers and engineers
      and all new construction will produce greater income
      but also will use greater energy.`,
      bonuses: [
        {
          name: "Gold",
          bonusImg: "BONUS/INCOME",
          color: "green",
          description: "New constructions income ",
          value: 5,
          procent: "%"
        },
        {
          name: "Power",
          bonusImg: "BONUS/POWER",
          color: "red",
          description: "New constructions energy consumption ",
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
      cursed: false,
      id: 3,
      audio: ["ERZA_01", "ERZA_02", "ERZA_03"],
      info: `
      Using my power you will obtain more materials, workers and engineers,
      but you will construct buildings which produce less income
      and use greater energy.`,
      bonuses: [
        {
          name: "Gold",
          bonusImg: "BONUS/INCOME",
          color: "red",
          description: "New constructions income ",
          value: -5,
          procent: "%"
        },
        {
          name: "Power",
          bonusImg: "BONUS/POWER",
          color: "red",
          description: "New constructions energy consumption ",
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

  getCharacters(newObj) {
    this.gameCharacters.next(newObj);
  }
}
