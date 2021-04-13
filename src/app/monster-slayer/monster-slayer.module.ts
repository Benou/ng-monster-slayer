import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MonsterSlayerRoutingModule } from './monster-slayer-routing.module';
import { MonsterSlayerComponent } from './containers';

@NgModule({
  declarations: [MonsterSlayerComponent],
  imports: [
    CommonModule,
    MonsterSlayerRoutingModule,
    StoreModule.forFeature('monsterSlayer', {}),
    EffectsModule.forFeature([])
  ]
})
export class MonsterSlayerModule {}
