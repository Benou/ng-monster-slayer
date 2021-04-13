import { TestBed } from '@angular/core/testing';

import { SlayerHealthCardComponent } from './slayer-health-card.component';

describe('SlayerHealthCardComponent', () => {
  let component: SlayerHealthCardComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlayerHealthCardComponent]
    });

    component = TestBed.inject(SlayerHealthCardComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
