import { Component, Input } from '@angular/core';

export interface PlayerJokenpo {
  label: string;
  value: number;
}

@Component({
  selector: 'app-placar',
  templateUrl: './placar.component.html',
  styleUrls: ['./placar.component.scss'],
})
export class PlacarComponent{

  defaultPlayer: PlayerJokenpo = {
    label: 'Aguardando',
    value: 0
  };

  @Input()
  player: PlayerJokenpo = this.defaultPlayer;

  @Input()
  enemy: PlayerJokenpo = this.defaultPlayer;
}
