import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as MonsterSlayerReducer from '../../shared/store/reducer';

@Component({
  selector: 'app-monster-slayer',
  templateUrl: './monster-slayer.component.html',
  styleUrls: ['./monster-slayer.component.scss']
})
export class MonsterSlayerComponent {

  constructor(private store: Store<MonsterSlayerReducer.State>) {}
}
