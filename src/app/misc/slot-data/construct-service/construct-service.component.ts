import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-construct-service',
  templateUrl: './construct-service.component.html',
  styleUrls: ['./construct-service.component.css']
})
export class ConstructServiceComponent implements OnInit {

  public constructService = [
    {
      name:"Wind",
      icon:"wind",
      cost:10000,
      workers:5,
      materials:500,
      energy:100,
      appeal:10
    },
    {
      name:"Solar",
      icon:"solar",
      cost:40000,
      workers:12,
      materials:1500,
      energy:300,
      appeal:20
    },
    {
      name:"Nuclear",
      icon:"nuclear",
      cost:80000,
      workers:40,
      materials:4000,
      energy:800,
      appeal:40
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
