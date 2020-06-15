import { Component, Input } from '@angular/core';
import { JokenpoPlayerEnum } from '../../../services';

@Component({
  selector: 'app-game-jokenpo-option',
  templateUrl: './game-jokenpo-option.component.html',
  styleUrls: ['./game-jokenpo-option.component.scss'],
})
export class GameJokenpoOptionComponent {

  playerEnum = JokenpoPlayerEnum;

  @Input()
  img: string;

  @Input()
  label: string;

  @Input()
  value: number;

  @Input()
  selected: number;

  choice(){

  }
  constructor() { }

}
