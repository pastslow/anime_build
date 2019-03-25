import { Component, OnInit } from '@angular/core';
import { LogicService } from 'src/app/logic.service';
import { erzaSounds, natsuSounds, lucySounds, graySounds } from '../../misc/const';
import { GameCharactersService } from 'src/app/game-characters.service';

@Component({
  selector: 'app-right-character',
  templateUrl: './right-character.component.html',
  styleUrls: ['./right-character.component.css']
})
export class rightCharacterComponent implements OnInit {

  public characterSelected = 0;

  public characters;

  constructor(private _charactersService: GameCharactersService) {
    this._charactersService.castCharacters.subscribe(
      gameCharacters => this.characters = gameCharacters);
    this._charactersService.castCharacterId.subscribe(
      characterId => this.characterSelected = characterId);
  }

  ngOnInit() {

  }

  playCharacterSound() {
    let characterSelected = this.characters[this.characterSelected];

    let soundNumber = Math.floor(
      Math.random() * characterSelected.audio.length);
    let soundCharacter = characterSelected.audio[soundNumber];

    if (characterSelected.name === "Erza"){
      erzaSounds.stop();
      erzaSounds.play(soundCharacter);
      return;
    }

    if (characterSelected.name === "Natsu"){
      natsuSounds.stop();
      natsuSounds.play(soundCharacter);
      return;
    }

    if (characterSelected.name === "Lucy"){
      lucySounds.stop();
      lucySounds.play(soundCharacter);
      return;
    }

    if (characterSelected.name === "Gray"){
      graySounds.stop();
      graySounds.play(soundCharacter);
      return;
    }

  }

}
