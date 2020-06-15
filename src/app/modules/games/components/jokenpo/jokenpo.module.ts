import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JokenpoContainer } from './container';
import { JokenpoRoutingModule } from './jokenpo-routing.module';
import { PlacarJokenpoModule } from './components';
import { GameJokenpoModule } from './components';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    JokenpoRoutingModule,
    PlacarJokenpoModule,
    GameJokenpoModule
  ],
  declarations: [JokenpoContainer]
})
export class JokenpoModule {}
