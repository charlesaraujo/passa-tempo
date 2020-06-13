import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JokenpoContainer } from './container/jokenpo.container';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { JokenpoRoutingModule } from './jokenpo-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    JokenpoRoutingModule
  ],
  declarations: [JokenpoContainer]
})
export class JokenpoModule {}
