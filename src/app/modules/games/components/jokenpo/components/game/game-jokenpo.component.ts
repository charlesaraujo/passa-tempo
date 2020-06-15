import { Component, Input, Output, EventEmitter } from '@angular/core';
import { JokenpoOptionType , JokenpoPlayerEnum } from '../../services';


@Component({
  selector: 'app-game-jokenpo',
  templateUrl: './game-jokenpo.component.html',
  styleUrls: ['./game-jokenpo.component.scss'],
})
export class GameJokenpoComponent {

  defaultOption: JokenpoOptionType[] = [{
    label: null,
    img: null,
    value: null,
    choice: JokenpoPlayerEnum.ENEMY
  }];

  public playerEnum = JokenpoPlayerEnum;

  @Input()
  options: JokenpoOptionType[] = this.defaultOption;

  @Input()
  result: any;

  @Output()
  choice: EventEmitter<number> = new EventEmitter<number>();

  /**
   * Devolve pro parent o index da opção selecionada pelo player
   * @param index indice do array
   */
  choiceSelected(index: number): void{
    this.choice.emit(index);
  }
  constructor() { }

}
