import { TestBed } from '@angular/core/testing';

import { SlayerActionsCardComponent } from './slayer-actions-card.component';

describe('SlayerActionsCardComponent', () => {
  let component: SlayerActionsCardComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlayerActionsCardComponent]
    });

    component = TestBed.inject(SlayerActionsCardComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
