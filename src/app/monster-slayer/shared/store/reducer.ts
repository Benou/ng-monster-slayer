import { createReducer, on } from '@ngrx/store';

import { Slayer } from '../../shared/models';
import * as MonsterSlayerActions from './actions';

export interface State {
  hero: Slayer;
  monster: Slayer;
  surrender: boolean;
  round: number;
  specialAttackCooldown: number;
}

export const initialState: State = {
  hero: {
    health: 100,
    maxHealth: 100,
    damage: [5, 12],
    healing: [8, 20]
  },
  monster: {
    health: 100,
    maxHealth: 100,
    damage: [8, 12]
  },
  surrender: false,
  round: 0,
  specialAttackCooldown: 3
};

export const reducer = createReducer(
  initialState,
  on(MonsterSlayerActions.setHealth, (state, { from, value }) => ({ ...state, [from]: { ...state[from], health: value } })),
  on(MonsterSlayerActions.surrender, state => ({ ...state, surrender: true })),
  on(MonsterSlayerActions.incrementRound, state => ({ ...state, round: state.round + 1 })),
  on(MonsterSlayerActions.reset, () => ({ ...initialState }))
);

export const getHero = (state: State): Slayer => state.hero;
export const getMonster = (state: State): Slayer => state.monster;
export const getSlayers = (hero: Slayer, monster: Slayer): [Slayer, Slayer] => [hero, monster];
export const getSurrender = (state: State): boolean => state.surrender;
export const getRound = (state: State): number => state.round;
export const getSpecialAttackCooldown = (state: State): number => state.specialAttackCooldown;
export const isSpecialAttackDisabled = (round: number, specialAttackCooldown: number): boolean => round % specialAttackCooldown !== 0;
