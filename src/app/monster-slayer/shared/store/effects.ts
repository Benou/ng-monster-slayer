import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';

import { MonsterSlayerService, SlayerType } from '../../shared';
import * as MonsterSlayerActions from './actions';
import * as MonsterSlayerReducer from './reducer';
import * as MonsterSlayerSelectors from './selectors';

@Injectable()
export class MonsterSlayerEffects {
  attack$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MonsterSlayerActions.attack, MonsterSlayerActions.specialAttack),
      map(action =>
        action.type === MonsterSlayerActions.attack.type ? action : { ...action, from: SlayerType.HERO, counter: true }
      ),
      withLatestFrom(this.store.pipe(select(MonsterSlayerSelectors.selectSlayers))),
      switchMap(([{ type, from, counter }, [hero, monster]]) => {
        const slayers = { hero, monster };
        const isFromHero = from === SlayerType.HERO;
        const to = isFromHero ? SlayerType.MONSTER : SlayerType.HERO;
        const newHealth = this.monsterSlayerService.randomizeDamage(
          slayers[from], slayers[to],
          type === MonsterSlayerActions.specialAttack.type
        );
        return [
          MonsterSlayerActions.setHealth({ from: to, value: newHealth }),
          ...(counter ? [MonsterSlayerActions.attack({ from: to, counter: false })] : []),
          ...(isFromHero ? [MonsterSlayerActions.incrementRound()] : [])
        ];
      })
    )
  );

  heal$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MonsterSlayerActions.heal),
      withLatestFrom(this.store.pipe(select(MonsterSlayerSelectors.selectHero))),
      switchMap(([_, hero]) => {
        const newHealth = this.monsterSlayerService.randomizeHealing(hero);
        return [
          MonsterSlayerActions.setHealth({ from: SlayerType.HERO, value: newHealth }),
          MonsterSlayerActions.attack({ from: SlayerType.MONSTER, counter: false }),
          MonsterSlayerActions.incrementRound()
        ];
      })
    )
  );

  constructor(
    private actions$: Actions,
    private monsterSlayerService: MonsterSlayerService,
    private store: Store<MonsterSlayerReducer.State>
  ) {}
}