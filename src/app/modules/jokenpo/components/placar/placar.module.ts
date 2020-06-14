import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacarComponent } from './placar.component';
import { PontuacaoModule } from './pontuacao';

@NgModule({
  declarations: [PlacarComponent],
  imports: [
    CommonModule,
    PontuacaoModule
  ],
  exports: [
    PlacarComponent
  ]
})
export class PlacarModule { }
