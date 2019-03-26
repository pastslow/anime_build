import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-upgrade-slot',
  templateUrl: './upgrade-slot.component.html',
  styleUrls: ['./upgrade-slot.component.css']
})
export class UpgradeSlotComponent implements OnInit {

  @Input("parentData") public slot;

  constructor() { }

  ngOnInit() {
  }

  upgradeArray = [
    {
      imgName:"starUpdateImg",
      primaryClass:"slot-update top-8",
      secondaryClass:"update-container",
      containerImgClass:"",
      imgClass:"slot-update-img"
    },
    {
      imgName:"energyUpdateImg",
      primaryClass:"slot-update top-88",
      secondaryClass:"update-container",
      containerImgClass:"",
      imgClass:"slot-update-img"
    },
    {
      imgName:"repairImg",
      primaryClass:"slot-update top-40",
      secondaryClass:"update-container justifty-left",
      containerImgClass:"",
      imgClass:"slot-repair-img"
    },
    {
      imgName:"appealImg",
      primaryClass:"slot-update top-26",
      secondaryClass:"update-container",
      containerImgClass:"left-auto",
      imgClass:"img-appeal"
    },
  ]

}
