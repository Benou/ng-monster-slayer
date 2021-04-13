import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-slayer-actions-card',
  templateUrl: './slayer-actions-card.component.html',
  styleUrls: ['./slayer-actions-card.component.scss']
})
export class SlayerActionsCardComponent {
  @Output() action: EventEmitter<string>;

  constructor() {
    this.action = new EventEmitter<string>();
  }

  performAction(action: string): void {
    this.action.emit(action);
  }
}
