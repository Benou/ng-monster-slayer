import { Injectable } from '@angular/core';

import { Slayer } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MonsterSlayerService {

  /**
   * Method used to compute the new attack's target health.
   * @param from - The attacking slayer.
   * @param to - The target of the attack.
   * @param isSpecial - Flag that specifies if it was a special attack.
   * @returns The new target health value.
   */
  randomizeDamage(from: Slayer, to: Slayer, isSpecial: boolean = false): Slayer['health'] {
    return Math.max(to.health - this.randomize(...from.damage) * (isSpecial ? 2 : 1), 0);
  }

  /**
   * Method used to compute the new healing's target health.
   * @param from - The target slayer from healing.
   * @returns The new target health value.
   */
  randomizeHealing(from: Slayer): Slayer['health'] {
    return Math.min(from.health + (from.healing ? this.randomize(...from.healing) : 0), from.maxHealth);
  }

  /**
   * Helper method used to get a random value from range.
   * @param min - The min interval value.
   * @param max - The max interval value.
   * @returns The random range value.
   */
  randomize(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
