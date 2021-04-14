import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { GameLog, SlayerActionType } from '../../shared';

@Component({
  selector: 'app-game-logs-card',
  templateUrl: './game-logs-card.component.html',
  styleUrls: ['./game-logs-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameLogsCardComponent {
  /** The logs collection to display. */
  @Input() logs: GameLog[] | null;

  /** Helper internal SlayerActionType enum used for ngSwitchCases. */
  SlayerActionType = SlayerActionType;
}
