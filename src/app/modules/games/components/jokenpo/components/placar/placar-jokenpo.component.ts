import { Component, Input } from '@angular/core';
import { JokenpoPlayerType } from '../../services';

@Component({
  selector: 'app-placar-jokenpo',
  templateUrl: './placar-jokenpo.component.html',
  styleUrls: ['./placar-jokenpo.component.scss'],
})
export class PlacarJokenpoComponent{

  defaultPlayer: JokenpoPlayerType = {
    label: null,
    value: null
  };

  @Input()
  player: JokenpoPlayerType = this.defaultPlayer;

  @Input()
  enemy: JokenpoPlayerType = this.defaultPlayer;
}
