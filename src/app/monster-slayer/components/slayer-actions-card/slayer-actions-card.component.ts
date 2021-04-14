import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { SlayerActionItem, SlayerActionType } from '../../shared';

@Component({
  selector: 'app-slayer-actions-card',
  templateUrl: './slayer-actions-card.component.html',
  styleUrls: ['./slayer-actions-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlayerActionsCardComponent {
  /** The battle actions collection. */
  @Input() items: SlayerActionItem[] | null;

  /** Emits when the hero wants to perform a battle action. */
  @Output() action: EventEmitter<SlayerActionType>;

  constructor() {
    this.action = new EventEmitter<SlayerActionType>();
  }

  /**
   * Invokes when the hero wants to perform a battle action.
   * @param type - The action type to perform.
   */
  performAction(type: SlayerActionType): void {
    this.action.emit(type);
  }
}
