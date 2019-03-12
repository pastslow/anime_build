import { Component, OnInit } from '@angular/core';
import { LogicService } from 'src/app/logic.service';
import { triggerAsyncId } from 'async_hooks';

@Component({
  selector: 'app-select-character',
  templateUrl: './select-character.component.html',
  styleUrls: ['./select-character.component.css']
})
export class SelectCharacterComponent implements OnInit {

  public characters;
  public characterId = 0;
  constructor(private _logicService:LogicService) {
    this._logicService.castCharacters.subscribe(gameCharacters => this.characters = gameCharacters);
    this._logicService.castCharacterId.subscribe(characterId => this.characterId = characterId);
   }

  ngOnInit() {
  }

  selectHero(heroName){
    let hero = this.characters.find(elem => elem.name == heroName);

  }

}
