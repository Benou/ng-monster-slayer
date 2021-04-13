import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Slayer, SlayerType } from '../../shared';
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

  constructor(private store: Store<MonsterSlayerReducer.State>) {
    this.slayers$ = this.store.pipe(select(MonsterSlayerSelectors.selectSlayers));
  }

  handleActions(action: string): void {
    switch (action) {
      case 'attack':
        this.store.dispatch(MonsterSlayerActions.attack({ from: SlayerType.HERO, counter: true }));
        break;
      case 'specialAttack':
        this.store.dispatch(MonsterSlayerActions.specialAttack());
        break;
      case 'heal':
        this.store.dispatch(MonsterSlayerActions.heal());
        break;
      case 'surrender':
        this.store.dispatch(MonsterSlayerActions.surrender());
        break;
      default:
        break;
    }
  }
}
