import { TestBed } from '@angular/core/testing';

import { GameBuildingsService } from './game-buildings.service';

describe('GameBuildingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameBuildingsService = TestBed.get(GameBuildingsService);
    expect(service).toBeTruthy();
  });
});
