import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materials-section',
  templateUrl: './materials-section.component.html',
  styleUrls: ['./materials-section.component.css']
})
export class MaterialsSectionComponent implements OnInit {

  public materialsShop = [
    {
      name:"few materials",
      icon:'material',
      cost:5000,
      number:100
    },
    {
      name:"medium pack of materials",
      icon:'material2',
      cost:24000,
      number:500
    },
    {
      name:"huge pack of materials",
      icon:'material3',
      cost:45000,
      number:1000
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
