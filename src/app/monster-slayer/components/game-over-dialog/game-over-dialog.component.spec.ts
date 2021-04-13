import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { GameOverDialogComponent } from './game-over-dialog.component';

describe('GameOverDialogComponent', () => {
  let component: GameOverDialogComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GameOverDialogComponent,
        { provide: MAT_DIALOG_DATA, useValue: 'foo' }
      ]
    });

    component = TestBed.inject(GameOverDialogComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
