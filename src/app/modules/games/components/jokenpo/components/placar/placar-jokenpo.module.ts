import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacarJokenpoComponent } from './placar-jokenpo.component';
import { PontuacaoJokenpoModule } from './pontuacao';

@NgModule({
  declarations: [PlacarJokenpoComponent],
  imports: [
    IonicModule,
    CommonModule,
    PontuacaoJokenpoModule
  ],
  exports: [
    PlacarJokenpoComponent
  ]
})
export class PlacarJokenpoModule { }
