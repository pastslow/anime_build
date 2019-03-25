import { TestBed } from '@angular/core/testing';

import { GameShopsService } from './game-shops.service';

describe('GameShopsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameShopsService = TestBed.get(GameShopsService);
    expect(service).toBeTruthy();
  });
});
