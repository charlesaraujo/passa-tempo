import { Component } from '@angular/core';
import { JokenpoEnum, JokenpoPlayerEnum } from '../services';

@Component({
  selector: 'app-jokenpo',
  templateUrl: 'jokenpo.container.html',
  styleUrls: ['jokenpo.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class JokenpoContainer {

  mock = {
    players: {
      player: {
        label: 'Charles',
        value: 4
      },
      enemy: {
        label: 'Jovinaldo',
        value: 2
      }
    },
    options: [
      {
        label: 'Papel',
        img: 'assets/img/jokenpo/paper.png',
        value: JokenpoEnum.PAPEL,
        choice: JokenpoPlayerEnum.PLAYER
      },
      {
        label: 'Pedra',
        img: 'assets/img/jokenpo/rock.png',
        value: JokenpoEnum.PEDRA,
        choice: JokenpoPlayerEnum.ENEMY
      },
      {
        label: 'Tesoura',
        img: 'assets/img/jokenpo/scissors.png',
        value: JokenpoEnum.TESOURA,
        choice: JokenpoPlayerEnum.NONE
      },
    ]
  };
}
