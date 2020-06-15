import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pontuacao-jokenpo',
  templateUrl: './pontuacao-jokenpo.component.html',
  styleUrls: ['./pontuacao-jokenpo.component.scss'],
})
export class PontuacaoJokenpoComponent {

  @Input()
  label: string;

  @Input()
  value: number;

}
