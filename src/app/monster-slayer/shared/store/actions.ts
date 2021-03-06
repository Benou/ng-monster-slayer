import { createAction, props } from '@ngrx/store';

import { GameLog, Slayer, SlayerType } from '../../shared';

export const incrementRound = createAction('[Monster Slayer] incrementRound');

export const attack = createAction('[Monster Slayer] attack', props<{ from: SlayerType, counter: boolean }>());
export const specialAttack = createAction('[Monster Slayer] specialAttack');
export const heal = createAction('[Monster Slayer] heal');
export const surrender = createAction('[Monster Slayer] surrender');

export const setHealth = createAction(
  '[Monster Slayer] setHealth',
  props<{ from: SlayerType, value: Slayer['health'] }>()
);

export const reset = createAction('[Monster Slayer] reset');
export const log = createAction('[Monster Slayer] log', props<{ log: GameLog }>());
