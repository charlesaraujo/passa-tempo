import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameJokenpoComponent } from './game-jokenpo.component';
import { GameJokenpoOptionModule } from './game-option';

@NgModule({
  declarations: [
    GameJokenpoComponent
  ],
  imports: [
    CommonModule,
    GameJokenpoOptionModule
  ],
  exports: [
    GameJokenpoComponent
  ]
})
export class GameJokenpoModule { }
