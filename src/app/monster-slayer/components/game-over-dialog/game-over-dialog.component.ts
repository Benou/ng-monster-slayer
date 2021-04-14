import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GameStatus, gameOverReasons } from '../../shared';
import * as MonsterSlayerReducer from '../../shared/store/reducer';
import * as MonsterSlayerSelectors from '../../shared/store/selectors';

@Component({
  selector: 'app-game-over-dialog',
  templateUrl: './game-over-dialog.component.html',
  styleUrls: ['./game-over-dialog.component.scss']
})
export class GameOverDialogComponent {
  /** Emits the current game status. */
  reason$: Observable<string | undefined>;

  /** Simple dialog used to display the game over reason. */
  constructor(private store: Store<MonsterSlayerReducer.State>) {
    this.reason$ = this.store.pipe(
      select(MonsterSlayerSelectors.selectGameStatus),
      map(status => this.getGameOverReason(status))
    );
  }

  /**
   * Get the game over reason according to the given game status.
   * @param status - The current game status.
   * @returns The game over reason text.
   */
  getGameOverReason(status: GameStatus): string | undefined {
    return gameOverReasons.get(status);
  }
}
