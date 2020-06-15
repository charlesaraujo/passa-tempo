import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameContainerRoutingModule } from './game-routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    GameContainerRoutingModule,
  ],
  declarations: []
})
export class GameContainerModule {}
