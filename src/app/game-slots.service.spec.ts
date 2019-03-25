import { TestBed } from '@angular/core/testing';

import { GameSlotsService } from './game-slots.service';

describe('GameSlotsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameSlotsService = TestBed.get(GameSlotsService);
    expect(service).toBeTruthy();
  });
});
