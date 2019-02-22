import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engineers-section',
  templateUrl: './engineers-section.component.html',
  styleUrls: ['./engineers-section.component.css']
})
export class EngineersSectionComponent implements OnInit {

  public materialsShop = [
    {
      name:"One Engineer",
      icon:'engineer',
      cost:35000,
      number:1
    },
    {
      name:"Two Engineers",
      icon:'engineer2',
      cost:65000,
      number:2
    },
    {
      name:"Three Engineers",
      icon:'engineer3',
      cost:90000,
      number:3
    },
  ]


  constructor() { }

  ngOnInit() {
  }

}
