import { SlayerType } from './slayer-type.enum';
import { SlayerActionType } from './slayer-action-type.enum';

export interface GameLog {
  from: SlayerType;
  actionType: SlayerActionType;
  value: number;
}
