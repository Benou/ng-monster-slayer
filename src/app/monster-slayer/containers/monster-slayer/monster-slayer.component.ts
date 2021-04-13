import { Component, OnDestroy, OnInit } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { filter, exhaustMap, takeUntil } from 'rxjs/operators';

import { GameOverDialogComponent } from '../../components';
import { GameStatus, gameOverReasons, Slayer, SlayerActionItem, SlayerActionType, SlayerType } from '../../shared';
import * as MonsterSlayerActions from '../../shared/store/actions';
import * as MonsterSlayerReducer from '../../shared/store/reducer';
import * as MonsterSlayerSelectors from '../../shared/store/selectors';

@Component({
  selector: 'app-monster-slayer',
  templateUrl: './monster-slayer.component.html',
  styleUrls: ['./monster-slayer.component.scss']
})
export class MonsterSlayerComponent implements OnInit, OnDestroy {
  slayers$: Observable<Slayer[]>;
  slayerActions$: Observable<SlayerActionItem[]>;
  gameStatus$: Observable<GameStatus>;
  onDestroy$: Subject<void>;

  constructor(
    public dialog: MatDialog,
    private store: Store<MonsterSlayerReducer.State>
  ) {
    this.slayers$ = this.store.pipe(select(MonsterSlayerSelectors.selectSlayers));
    this.slayerActions$ = this.store.pipe(select(MonsterSlayerSelectors.selectSlayerActions));
    this.gameStatus$ = this.store.pipe(select(MonsterSlayerSelectors.selectGameStatus));
    this.onDestroy$ = new Subject<void>();
  }

  ngOnInit(): void {
    this.gameStatus$.pipe(
      filter((status: GameStatus): boolean => status !== GameStatus.SLAYERING),
      exhaustMap((status: GameStatus) =>
        this.dialog.open(GameOverDialogComponent, { data: this.handleGameOverReason(status) }).afterClosed()
      ),
      takeUntil(this.onDestroy$)
    ).subscribe(() => this.store.dispatch(MonsterSlayerActions.reset()));
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
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

  handleGameOverReason(status: GameStatus): string | undefined {
    return gameOverReasons.get(status);
  }
}
