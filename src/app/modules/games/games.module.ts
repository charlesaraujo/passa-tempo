import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesContainer } from './container';
import { GamesRoutingModule } from './games-routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    GamesRoutingModule,
  ],
  declarations: [GamesContainer]
})
export class GamesModule {}
