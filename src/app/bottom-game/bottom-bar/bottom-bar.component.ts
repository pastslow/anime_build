import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent implements OnInit {

  public modalName;
  public hadClickOnMoney = false;
  public hadClickOnMaterials = false;
  public hadClickOnWorkers = false;
  public hadClickOnEngineers = false;


  public bottomItems = [
    {
      name:"Money",
      icon:'money',
      value:500,
      bg:"rgba(244, 22, 33, 1)"
    },
    {
      name:"Materials",
      icon:'materials',
      value:500,
      bg:"rgba(22, 33, 255, 1)"
    },
    {
      name:"Workers",
      icon:'worker',
      value:500,
      bg:"rgba(146, 146, 0, 1)"
    },
    {
      name:"Engineers",
      icon:'engineer',
      value:500,
      bg:"rgba(22, 128, 128, 1)"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  modalInfo(title){
     this.hadClickOnMoney = false;
     this.hadClickOnMaterials = false;
     this.hadClickOnWorkers = false;
     this.hadClickOnEngineers = false;

     if (title == "Money") {
      this.modalName = "MONEY & GOALS";
      this.hadClickOnMoney = true;
      return
     }

     if (title == "Materials") {
      this.modalName = "GET MATERIALS";
      this.hadClickOnMaterials = true;
      return
     }

     if (title == "Workers") {
      this.modalName = "HIRE WORKERS";
      this.hadClickOnWorkers = true;
      return
     }

     if (title == "Engineers") {
      this.modalName = "HIRE ENGINEERS";
      this.hadClickOnEngineers = true;
      return
     }

  }

}
