import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-option',
  templateUrl: './game-option.component.html',
  styleUrls: ['./game-option.component.scss'],
})
export class GameOptionComponent {

  @Input()
  img: string;

  constructor() { }

}
