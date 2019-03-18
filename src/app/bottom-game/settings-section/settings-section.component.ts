import { Component, OnInit, Inject } from '@angular/core';
import { Howl, Howler } from 'howler';
import { LogicService } from 'src/app/logic.service';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-settings-section',
  templateUrl: './settings-section.component.html',
  styleUrls: ['./settings-section.component.css']
})
export class SettingsSectionComponent implements OnInit {
  public isGameOnFullScreen;
  public volume;
  public gameData;

  constructor(private _logicService: LogicService, @Inject(DOCUMENT) private document: any) {
    this._logicService.cast.subscribe(
      gameValues => this.gameData = gameValues);
    this.isGameOnFullScreen = this.gameData.fullScreen;
    this.volume = this.gameData.volume;
  }
  public elem;

  ngOnInit() {
    this.elem = document.documentElement;
  }

  changeVolume(event) {
    Howler.volume(event.target.value);
    this.gameData.volume = event.target.value;
  }

  changeToFullScreen() {
    this.isGameOnFullScreen = true;
    this.gameData.fullScreen = true;

    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      //----------------------------- Firefox -----------------------------/
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      //--------------------- Chrome, Safari and Opera --------------------/
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      //----------------------------- IE/Edge -----------------------------/
      this.elem.msRequestFullscreen();
    }
  }

  changeScreenToNormal() {
    this.isGameOnFullScreen = false;
    this.gameData.fullScreen = false;

    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      //----------------------------- Firefox -----------------------------/
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      //--------------------- Chrome, Safari and Opera --------------------/
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      //----------------------------- IE/Edge -----------------------------/
      this.document.msExitFullscreen();
    }
  }

}
