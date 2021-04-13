import { Component } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Slayer, SlayerActionItem, SlayerActionType, SlayerType } from '../../shared';
import * as MonsterSlayerActions from '../../shared/store/actions';
import * as MonsterSlayerReducer from '../../shared/store/reducer';
import * as MonsterSlayerSelectors from '../../shared/store/selectors';

@Component({
  selector: 'app-monster-slayer',
  templateUrl: './monster-slayer.component.html',
  styleUrls: ['./monster-slayer.component.scss']
})
export class MonsterSlayerComponent {
  slayers$: Observable<Slayer[]>;
  slayerActions$: Observable<SlayerActionItem[]>;

  constructor(private store: Store<MonsterSlayerReducer.State>) {
    this.slayers$ = this.store.pipe(select(MonsterSlayerSelectors.selectSlayers));
    this.slayerActions$ = this.store.pipe(select(MonsterSlayerSelectors.selectSlayerActions));
  }

  handleActions(type: SlayerActionType): void {
    let action: Action | null = null;

    switch (type) {
      case SlayerActionType.ATTACK:
        action = MonsterSlayerActions.attack({ from: SlayerType.HERO, counter: true });
        break;
      case SlayerActionType.SPECIAL_ATTACK:
        action = MonsterSlayerActions.specialAttack();
        break;
      case SlayerActionType.HEAL:
        action = MonsterSlayerActions.heal();
        break;
      case SlayerActionType.SURRENDER:
        action = MonsterSlayerActions.surrender();
        break;
      default:
        break;
    }

    action !== null && this.store.dispatch(action);
  }
}
