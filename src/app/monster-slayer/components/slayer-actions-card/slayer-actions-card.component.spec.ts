import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { SlayerActionsCardComponent } from './slayer-actions-card.component';

describe('SlayerActionsCardComponent', () => {
  let component: SlayerActionsCardComponent;
  let fixture: ComponentFixture<SlayerActionsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlayerActionsCardComponent],
      imports: [
        MatCardModule,
        MatButtonModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlayerActionsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
