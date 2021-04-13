import { Component, Input } from '@angular/core';

import { Slayer } from '../../shared';

@Component({
  selector: 'app-slayer-health-card',
  templateUrl: './slayer-health-card.component.html',
  styleUrls: ['./slayer-health-card.component.scss']
})
export class SlayerHealthCardComponent {
  /** The slayer to display. */
  @Input() slayer: Slayer;
}
