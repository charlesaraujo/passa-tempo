import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-placar-pontuacao',
  templateUrl: './pontuacao.component.html',
  styleUrls: ['./pontuacao.component.scss'],
})
export class PontuacaoComponent {

  @Input()
  label: string;

  @Input()
  value: number;

}
