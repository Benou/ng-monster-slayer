import { Injectable } from '@angular/core';

import { Slayer } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MonsterSlayerService {
  randomizeDamage(from: Slayer, to: Slayer, isSpecial: boolean = false): Slayer['health'] {
    return Math.max(to.health - this.randomize(...from.damage) * (isSpecial ? 2 : 1), 0);
  }

  randomizeHealing(from: Slayer): Slayer['health'] {
    return Math.min(from.health + (from.healing ? this.randomize(...from.healing) : 0), from.maxHealth);
  }

  randomize(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
