import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { LogicService } from 'src/app/logic.service';

@Component({
  selector: 'app-construct-building',
  templateUrl: './construct-building.component.html',
  styleUrls: ['./construct-building.component.css']
})
export class ConstructBuildingComponent implements OnChanges {

  @Input() public btnPressed
  @Output() public getBack = new EventEmitter();

  public returnToMenu = true;
  getBackToMenu(){
    this.getBack.emit(this.returnToMenu);
  }

  public constructionArr = [];
  public constructArr;


  constructor(private _logicService: LogicService) { }

  ngOnChanges(changes: SimpleChanges) {
    this.constructionArr = this._logicService.slotActions();
    this.constructArr = this.constructionArr.find(elem => elem.name == this.btnPressed);
  }


}
