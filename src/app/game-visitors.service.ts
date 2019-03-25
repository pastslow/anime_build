import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameVisitorsService {

  constructor() { }
  // ---------------------------- All game visitors ------------------------ //
  getGameVisitors() {
    return [
      {
        name: "No visitator",
        img: "EMPTY",
        description: `Currently there are not any visitors in your village.`,
        bonuses: [
          {
            img: "EMPTY",
            value: "",
            sign: "",
            procent: ""
          }
        ]
      },
      {
        name: "No visitator",
        img: "EMPTY2",
        description: `Currently there are not any visitors in your village.`,
        bonuses: [
          {
            img: "EMPTY",
            value: "",
            sign: "",
            procent: ""
          }
        ]
      },
      {
        name: "Sasuke",
        img: "SASUKE",
        description: `I'm one of the most powerful man in the world,
       and I will help you to construct buildings with greater income.`,
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
      and this is why I brought you some materials.`,
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
            procent: "%"
          }
        ]
      },
      {
        name: "Itachi",
        img: "ITACHI",
        description: `As a uchiha genius I will 
      help you to get more game resources at the same cost.
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
            value: -40,
            sign: "",
            procent: "%"
          },
          {
            img: "MATERIALS",
            value: -20,
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
        description: `This visitor is very dangerous
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
      {
        name: "Orochimaru",
        img: "OROCHIMARU",
        description: `This visitator has cast a curse on you that
       make you see different, this is why all new construction
        will produce less income and use greater energy.
      `,
        bonuses: [
          {
            img: "CURSE",
            value: "",
            sign: "",
            procent: ""
          }
        ]
      },
      {
        name: "Tsunade",
        img: "TSUNADE",
        description: `As a medic hokage if you have a curse
       I will help you to get rid of it for free.
      `,
        bonuses: [
          {
            img: "HAPPY",
            value: "",
            sign: "",
            procent: ""
          }
        ]
      },
    ]
  }
}
