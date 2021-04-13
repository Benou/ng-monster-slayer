import { SlayerActionType } from './slayer-action-type.enum';

export interface SlayerActionItem {
  type: SlayerActionType,
  label: string;
  disabled: boolean;
}

export const slayerActions: SlayerActionItem[] = [
  {
    type: SlayerActionType.ATTACK,
    label: 'Attack',
    disabled: false
  },
  {
    type: SlayerActionType.SPECIAL_ATTACK,
    label: 'Special Attack',
    disabled: false
  },
  {
    type: SlayerActionType.HEAL,
    label: 'Heal',
    disabled: false
  },
  {
    type: SlayerActionType.SURRENDER,
    label: 'Surrender',
    disabled: false
  }
];
