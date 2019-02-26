import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-construct-house',
  templateUrl: './construct-house.component.html',
  styleUrls: ['./construct-house.component.css']
})
export class ConstructHouseComponent implements OnInit {
  public constructHouse = [
    {
      name:"House",
      icon:"house01",
      cost:3000,
      workers:1,
      materials:100,
      energy:40
    },
    {
      name:"Duplex",
      icon:"house02",
      cost:6500,
      workers:2,
      materials:200,
      energy:60
    },
    {
      name:"Craftsman",
      icon:"house03",
      cost:14000,
      workers:4,
      materials:350,
      energy:80
    },
    {
      name:"Condo",
      icon:"house04",
      cost:30000,
      workers:6,
      materials:560,
      energy:90
    },
    {
      name:"Georgian",
      icon:"house05",
      cost:40000,
      workers:10,
      materials:1200,
      energy:140
    },
    {
      name:"Apartment",
      icon:"house06",
      cost:80000,
      workers:25,
      materials:2200,
      energy:250
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
