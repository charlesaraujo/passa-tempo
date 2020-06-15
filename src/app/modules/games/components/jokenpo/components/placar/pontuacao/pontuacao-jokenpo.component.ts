import { Component, Input } from '@angular/core';
import { JokenpoPlayerEnum } from '../../../services';

@Component({
  selector: 'app-pontuacao-jokenpo',
  templateUrl: './pontuacao-jokenpo.component.html',
  styleUrls: ['./pontuacao-jokenpo.component.scss'],
})
export class PontuacaoJokenpoComponent {


  public playerEnum = JokenpoPlayerEnum;

  @Input()
  label: string;

  @Input()
  value: number;

  @Input()
  winner: number;

  @Input()
  player: number;

}
