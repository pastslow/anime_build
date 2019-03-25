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

}
