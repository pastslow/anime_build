import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-character',
  templateUrl: './right-character.component.html',
  styleUrls: ['./right-character.component.css']
})
export class rightCharacterComponent implements OnInit {

  public characterSelected = 0;

  public characters = [
    {
      name:"Natsu",
      img:'natsu',
      bonuses:[
        {
          name:"Gold",
          bonusImg:"money",
          actionValue:"+",
          value:10,
          color:"green",
          procent:"%"
        },
        {
          name:"Power",
          bonusImg:"power",
          actionValue:"-",
          color:"green",
          value:10,
          procent:"%"
        }
      ]
    },
    {
      name:"Lucy",
      img:'lucy',
      bonuses:[
        {
          name:"Gold",
          bonusImg:"money",
          actionValue:"+",
          color:"green",
          value:5,
          procent:"%"
        },
        {
          name:"Power",
          bonusImg:"power",
          actionValue:"+",
          color:"red",
          value:5,
          procent:"%"
        },
        {
          name:"Appeal",
          bonusImg:"happy",
          actionValue:"+",
          color:"green",
          value:40,
          procent:"%"
        }
      ]
    },
    {
      name:"Gray",
      img:'gray',
      bonuses:[
        {
          name:"Gold",
          bonusImg:"money",
          actionValue:"+",
          color:"green",
          value:20,
          procent:"%"
        },
        {
          name:"Power",
          bonusImg:"power",
          actionValue:"+",
          color:"red",
          value:10,
          procent:"%"
        },
        {
          name:"Appeal",
          bonusImg:"sad",
          actionValue:"+",
          color:"red",
          value:10,
          procent:"%"
        },
        {
          name:"Materials",
          bonusImg:"materials",
          actionValue:"+",
          color:"green",
          value:5,
          procent:"%"
        },
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
