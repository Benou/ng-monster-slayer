import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { MonsterSlayerComponent } from './monster-slayer.component';

describe('MonsterSlayerComponent', () => {
  let component: MonsterSlayerComponent;
  let fixture: ComponentFixture<MonsterSlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonsterSlayerComponent],
      providers: [provideMockStore({})]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterSlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
