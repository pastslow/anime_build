import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-construct-mark',
  templateUrl: './construct-mark.component.html',
  styleUrls: ['./construct-mark.component.css']
})
export class ConstructMarkComponent implements OnInit {

  public constructMark = [
    {
      name:"Tennis",
      icon:"tennis",
      cost:10000,
      workers:3,
      materials:500,
      energy:10,
      appeal:10
    },
    {
      name:"Pool",
      icon:"pool",
      cost:14000,
      workers:4,
      materials:600,
      energy:20,
      appeal:15
    },
    {
      name:"Minigolf",
      icon:"minigolf",
      cost:30000,
      workers:6,
      materials:800,
      energy:40,
      appeal:20
    },
    {
      name:"Amphitheater",
      icon:"amphitheater",
      cost:40000,
      workers:8,
      materials:1000,
      energy:100,
      appeal:25
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
