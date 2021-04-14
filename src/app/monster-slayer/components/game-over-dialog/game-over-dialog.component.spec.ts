import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { GameOverDialogComponent } from './game-over-dialog.component';

describe('GameOverDialogComponent', () => {
  let component: GameOverDialogComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GameOverDialogComponent,
        provideMockStore({})
      ]
    });

    component = TestBed.inject(GameOverDialogComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
