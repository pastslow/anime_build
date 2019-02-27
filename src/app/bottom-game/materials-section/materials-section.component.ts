import { Component, OnInit, Input } from '@angular/core';
import { LogicService } from 'src/app/logic.service';

@Component({
  selector: 'app-materials-section',
  templateUrl: './materials-section.component.html',
  styleUrls: ['./materials-section.component.css']
})
export class MaterialsSectionComponent implements OnInit {

  @Input() public btnPressed;


  public bottomDataValues = [];


  constructor(private _logicService: LogicService) {  }

  ngOnInit() {
    this.bottomDataValues = this._logicService.bottomLogicData();
  }

}
