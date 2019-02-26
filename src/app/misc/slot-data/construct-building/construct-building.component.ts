import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-construct-building',
  templateUrl: './construct-building.component.html',
  styleUrls: ['./construct-building.component.css']
})
export class ConstructBuildingComponent implements OnInit {

  public constructBuilding = [
    {
      name:"Garden",
      icon:"gardencenter",
      cost:15000,
      workers:4,
      materials:300,
      energy:50
    },
    {
      name:"Lumber Mill",
      icon:"lumbermill",
      cost:35000,
      workers:6,
      materials:500,
      energy:100
    },
    {
      name:"Recycle Center",
      icon:"recyclecenter",
      cost:45000,
      workers:8,
      materials:800,
      energy:120
    },
    {
      name:"Business Center",
      icon:"businesscenter",
      cost:60000,
      workers:15,
      materials:2000,
      energy:200
    },
    {
      name:"Tech Center",
      icon:"techcenter",
      cost:90000,
      workers:30,
      materials:4000,
      energy:400
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
