import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, delay, map, tap } from 'rxjs/operators';

import { Slayer, SlayerStatus } from '../../shared';

@Component({
  selector: 'app-slayer-health-card',
  templateUrl: './slayer-health-card.component.html',
  styleUrls: ['./slayer-health-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlayerHealthCardComponent implements OnChanges {
  /** The slayer to display. */
  @Input() slayer: Slayer;

  /** Emits the current slayer status. */
  status$: BehaviorSubject<SlayerStatus>;

  /** Emits the current avatar class related to the given slayer status. */
  avatarClass$: Observable<any>;

  constructor() {
    this.status$ = new BehaviorSubject<SlayerStatus>(SlayerStatus.IDLE);
    this.avatarClass$ = this.status$.pipe(
      distinctUntilChanged(),
      map(status => ([this.slayer.type, this.isDead() ? SlayerStatus.DIE : status])),
      delay(500),
      tap(([_, status]) => this.status$.next(SlayerStatus.IDLE))
    );
  }

  /**
   * Check the new slayer status.
   * @param changes - The current cycle changes.
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (!this.slayer || !changes.slayer.previousValue) {
      return;
    }

    const status = this.isDead() ? SlayerStatus.DIE :
      this.slayer.health >= changes.slayer.previousValue.health ? SlayerStatus.HEAL : SlayerStatus.HURT;

    this.status$.next(status);
  }

  /**
   * Check if the current slayer is dead.
   * @returns True if the current slayer is dead.
   */
  protected isDead(): boolean {
    return this.slayer && this.slayer.health === 0;
  }
}
