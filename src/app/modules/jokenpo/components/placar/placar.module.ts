import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacarComponent } from './placar.component';

@NgModule({
  declarations: [PlacarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PlacarComponent
  ]
})
export class PlacarModule { }
