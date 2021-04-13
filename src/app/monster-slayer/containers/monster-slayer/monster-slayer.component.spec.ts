import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { MonsterSlayerComponent } from './monster-slayer.component';

describe('MonsterSlayerComponent', () => {
  let component: MonsterSlayerComponent;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule
      ],
      providers: [
        MonsterSlayerComponent,
        provideMockStore({})
      ]
    });

    component = TestBed.inject(MonsterSlayerComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
