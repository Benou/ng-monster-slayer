import { Component, EventEmitter, Input, Output } from '@angular/core';

import { SlayerActionItem, SlayerActionType } from '../../shared';

@Component({
  selector: 'app-slayer-actions-card',
  templateUrl: './slayer-actions-card.component.html',
  styleUrls: ['./slayer-actions-card.component.scss']
})
export class SlayerActionsCardComponent {
  @Input() items: SlayerActionItem[] | null;
  @Output() action: EventEmitter<SlayerActionType>;

  constructor() {
    this.action = new EventEmitter<SlayerActionType>();
  }

  performAction(type: SlayerActionType): void {
    this.action.emit(type);
  }
}
