import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacarJokenpoComponent } from './placar-jokenpo.component';
import { PontuacaoJokenpoModule } from './pontuacao';

@NgModule({
  declarations: [PlacarJokenpoComponent],
  imports: [
    CommonModule,
    PontuacaoJokenpoModule
  ],
  exports: [
    PlacarJokenpoComponent
  ]
})
export class PlacarJokenpoModule { }
