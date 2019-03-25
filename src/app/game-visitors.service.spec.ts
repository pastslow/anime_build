import { TestBed } from '@angular/core/testing';

import { GameVisitorsService } from './game-visitors.service';

describe('GameVisitorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameVisitorsService = TestBed.get(GameVisitorsService);
    expect(service).toBeTruthy();
  });
});
