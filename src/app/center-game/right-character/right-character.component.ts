import { Component, OnInit } from '@angular/core';
import { LogicService } from 'src/app/logic.service';

@Component({
  selector: 'app-right-character',
  templateUrl: './right-character.component.html',
  styleUrls: ['./right-character.component.css']
})
export class rightCharacterComponent implements OnInit {

  public characterSelected = 0;

  public characters;

  constructor(private _logicService:LogicService) {
    this._logicService.castCharacters.subscribe(
      gameCharacters => this.characters = gameCharacters);
    this._logicService.castCharacterId.subscribe(
      characterId => this.characterSelected = characterId);
   }

  ngOnInit() {

  }

}
