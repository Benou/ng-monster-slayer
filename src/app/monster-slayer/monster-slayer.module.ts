import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { MonsterSlayerRoutingModule } from './monster-slayer-routing.module';
import { MonsterSlayerComponent } from './containers';
import { GameOverDialogComponent, SlayerHealthCardComponent, SlayerActionsCardComponent } from './components';
import { MonsterSlayerEffects } from './shared/store/effects';
import * as MonsterSlayerReducer from './shared/store/reducer';


@NgModule({
  declarations: [MonsterSlayerComponent, SlayerHealthCardComponent, SlayerActionsCardComponent, GameOverDialogComponent],
  imports: [
    CommonModule,
    MonsterSlayerRoutingModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDialogModule,
    StoreModule.forFeature('monsterSlayer', MonsterSlayerReducer.reducer),
    EffectsModule.forFeature([MonsterSlayerEffects])
  ]
})
export class MonsterSlayerModule {}
