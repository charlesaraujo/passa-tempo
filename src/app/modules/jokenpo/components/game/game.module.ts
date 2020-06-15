import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { GameOptionModule } from './game-option';

@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule,
    GameOptionModule
  ],
  exports: [
    GameComponent
  ]
})
export class GameModule { }
