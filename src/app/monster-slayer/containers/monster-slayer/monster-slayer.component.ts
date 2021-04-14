import { Component, OnDestroy, OnInit } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { filter, exhaustMap, takeUntil } from 'rxjs/operators';

import { GameOverDialogComponent } from '../../components';
import { GameLog, GameStatus, Slayer, SlayerActionItem, SlayerActionType, SlayerType } from '../../shared';
import * as MonsterSlayerActions from '../../shared/store/actions';
import * as MonsterSlayerReducer from '../../shared/store/reducer';
import * as MonsterSlayerSelectors from '../../shared/store/selectors';

@Component({
  selector: 'app-monster-slayer',
  templateUrl: './monster-slayer.component.html',
  styleUrls: ['./monster-slayer.component.scss']
})
export class MonsterSlayerComponent implements OnInit, OnDestroy {
  /** Emits the slayers tuple. */
  slayers$: Observable<Slayer[]>;

  /** Emits the current available battle actions. */
  slayerActions$: Observable<SlayerActionItem[]>;

  /** Emits the current game status. */
  gameStatus$: Observable<GameStatus>;

  /** Emits the battle logs. */
  gameLogs$: Observable<GameLog[]>;

  /** Helper subject used to clean up internal subecriptions. */
  onDestroy$: Subject<void>;

  constructor(
    public dialog: MatDialog,
    private store: Store<MonsterSlayerReducer.State>
  ) {
    this.slayers$ = this.store.pipe(select(MonsterSlayerSelectors.selectSlayers));
    this.slayerActions$ = this.store.pipe(select(MonsterSlayerSelectors.selectSlayerActions));
    this.gameStatus$ = this.store.pipe(select(MonsterSlayerSelectors.selectGameStatus));
    this.gameLogs$ = this.store.pipe(select(MonsterSlayerSelectors.selectGameLogs));
    this.onDestroy$ = new Subject<void>();
  }

  /**
   * Subscribe to the game status observable. Display the rematch dialog when the game is over.
   */
  ngOnInit(): void {
    this.gameStatus$.pipe(
      filter((status: GameStatus): boolean => status !== GameStatus.SLAYERING),
      exhaustMap(() => this.dialog.open(GameOverDialogComponent).afterClosed()),
      takeUntil(this.onDestroy$)
    ).subscribe(() => this.store.dispatch(MonsterSlayerActions.reset()));
  }

  /**
   * Clean up internal subscriptions.
   */
  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  /**
   * Handle the given hero action. Let's invoke the appropriate data-flow.
   * @param type - The action type to handle.
   */
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

  /**
   * Tracker function used to optimize ngFor children management.
   * @param index - The slayer index.
   * @param item - The slayer item.
   * @returns The slayer tracker value.
   */
  trackSlayers(index: number, item: Slayer) {
    return item.type;
  }
}
