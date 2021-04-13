import { Component, Input } from '@angular/core';

import { GameLog, SlayerActionType } from '../../shared';

@Component({
  selector: 'app-game-logs-card',
  templateUrl: './game-logs-card.component.html',
  styleUrls: ['./game-logs-card.component.scss']
})
export class GameLogsCardComponent {
  @Input() logs: GameLog[] | null;
  SlayerActionType = SlayerActionType;
}
