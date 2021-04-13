import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MonsterSlayerRoutingModule } from './monster-slayer-routing.module';
import { MonsterSlayerComponent } from './containers';
import {
  GameLogsCardComponent,
  GameOverDialogComponent,
  SlayerHealthCardComponent,
  SlayerActionsCardComponent
} from './components';
import { TupleValuesPipe } from './shared/pipes';
import { MonsterSlayerEffects } from './shared/store/effects';
import * as MonsterSlayerReducer from './shared/store/reducer';

@NgModule({
  declarations: [
    MonsterSlayerComponent,
    SlayerHealthCardComponent,
    SlayerActionsCardComponent,
    GameOverDialogComponent,
    GameLogsCardComponent,
    TupleValuesPipe
  ],
  imports: [
    CommonModule,
    MonsterSlayerRoutingModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    MatTooltipModule,
    StoreModule.forFeature('monsterSlayer', MonsterSlayerReducer.reducer),
    EffectsModule.forFeature([MonsterSlayerEffects])
  ]
})
export class MonsterSlayerModule {}
