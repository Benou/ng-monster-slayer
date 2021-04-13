import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as MonsterSlayerReducer from './reducer';

const monsterSlayerState = createFeatureSelector<MonsterSlayerReducer.State>('monsterSlayer');

export const selectHero = createSelector(monsterSlayerState, MonsterSlayerReducer.getHero);

export const selectMonster = createSelector(monsterSlayerState, MonsterSlayerReducer.getMonster);

export const selectSlayers = createSelector(selectHero, selectMonster, MonsterSlayerReducer.getSlayers);

export const selectSurrender = createSelector(monsterSlayerState, MonsterSlayerReducer.getSurrender);

export const selectRound = createSelector(monsterSlayerState, MonsterSlayerReducer.getRound);

export const selectSpecialAttackCooldown = createSelector(monsterSlayerState, MonsterSlayerReducer.getSpecialAttackCooldown);

export const selectIsSpecialAttackDisabled = createSelector(
  selectRound,
  selectSpecialAttackCooldown,
  MonsterSlayerReducer.isSpecialAttackDisabled
);

export const selectSlayerActions = createSelector(
  selectIsSpecialAttackDisabled,
  MonsterSlayerReducer.getSlayerActions
);

export const selectGameStatus = createSelector(
  selectHero,
  selectMonster,
  selectSurrender,
  MonsterSlayerReducer.getGameStatus
);

export const selectGameLogs = createSelector(monsterSlayerState, MonsterSlayerReducer.getGameLogs);
