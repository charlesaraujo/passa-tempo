import { Component, Input } from '@angular/core';
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

  @Input()
  options: JokenpoOptionType[] = this.defaultOption;

  constructor() { }

}
