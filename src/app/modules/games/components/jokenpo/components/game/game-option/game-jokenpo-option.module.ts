import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameJokenpoOptionComponent } from './game-jokenpo-option.component';

@NgModule({
  declarations: [
    GameJokenpoOptionComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    GameJokenpoOptionComponent
  ]
})
export class GameJokenpoOptionModule { }
