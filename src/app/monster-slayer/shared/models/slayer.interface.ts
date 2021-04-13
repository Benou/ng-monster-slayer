import { SlayerType } from './slayer-type.enum';

export interface Slayer {
  type: SlayerType;
  health: number;
  maxHealth: number;
  damage: [number, number];
  healing?: [number, number];
}
