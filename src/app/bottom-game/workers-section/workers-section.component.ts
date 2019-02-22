import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workers-section',
  templateUrl: './workers-section.component.html',
  styleUrls: ['./workers-section.component.css']
})
export class WorkersSectionComponent implements OnInit {

  public workersShop = [
    {
      name:"One Worker",
      icon:'worker',
      cost:30000,
      number:1
    },
    {
      name:"Two Workers",
      icon:'worker2',
      cost:55000,
      number:2
    },
    {
      name:"Three Workers",
      icon:'worker3',
      cost:80000,
      number:3
    },
  ]


  constructor() { }

  ngOnInit() {
  }

}
