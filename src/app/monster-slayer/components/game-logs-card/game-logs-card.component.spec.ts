import { TestBed } from '@angular/core/testing';

import { GameLogsCardComponent } from './game-logs-card.component';

describe('GameLogsCardComponent', () => {
  let component: GameLogsCardComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameLogsCardComponent]
    });

    component = TestBed.inject(GameLogsCardComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
