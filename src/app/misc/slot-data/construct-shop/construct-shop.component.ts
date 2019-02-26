import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-construct-shop',
  templateUrl: './construct-shop.component.html',
  styleUrls: ['./construct-shop.component.css']
})
export class ConstructShopComponent implements OnInit {

  public constructShop = [
    {
      name:"Botique",
      icon:"botique",
      cost:40000,
      workers:8,
      materials:500,
      energy:100
    },
    {
      name:"Grocery",
      icon:"grocery",
      cost:60000,
      workers:16,
      materials:1000,
      energy:250
    },
    {
      name:"Cinema",
      icon:"cinema",
      cost:85000,
      workers:20,
      materials:3000,
      energy:550
    },
    {
      name:"Banckery",
      icon:"backery",
      cost:98000,
      workers:32,
      materials:5000,
      energy:700
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
