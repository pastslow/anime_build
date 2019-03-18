import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';
import { LogicService } from 'src/app/logic.service';

@Component({
  selector: 'app-settings-section',
  templateUrl: './settings-section.component.html',
  styleUrls: ['./settings-section.component.css']
})
export class SettingsSectionComponent implements OnInit {
  public isGameOnFullScreen;
  public volume;
  public gameData;
  public elem = document.documentElement;


  constructor(private _logicService:LogicService) {
    this._logicService.cast.subscribe(
      gameValues => this.gameData = gameValues);
    this.isGameOnFullScreen = this.gameData.fullScreen;
    this.volume = this.gameData.volume;
   }

  ngOnInit() {
  }

  changeVolume(event){
    Howler.volume(event.target.value);
    this.gameData.volume = event.target.value;
  }

  changeToFullScreen(){
    this.isGameOnFullScreen = true;
    this.gameData.fullScreen = true;
      this.elem.requestFullscreen();
  }

  changeScreenToNormal(){
    this.isGameOnFullScreen = false;
    this.gameData.fullScreen = false;
      document.exitFullscreen();
  }
 
}
