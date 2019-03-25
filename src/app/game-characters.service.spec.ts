import { TestBed } from '@angular/core/testing';

import { GameCharactersService } from './game-characters.service';

describe('GameCharactersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameCharactersService = TestBed.get(GameCharactersService);
    expect(service).toBeTruthy();
  });
});
