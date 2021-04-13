import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { SlayerHealthCardComponent } from './slayer-health-card.component';

describe('SlayerHealthCardComponent', () => {
  let component: SlayerHealthCardComponent;
  let fixture: ComponentFixture<SlayerHealthCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlayerHealthCardComponent],
      imports: [
        MatCardModule,
        MatIconModule,
        MatProgressBarModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlayerHealthCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
