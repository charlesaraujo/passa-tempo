import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-placar',
  templateUrl: './placar.component.html',
  styleUrls: ['./placar.component.scss'],
})
export class PlacarComponent implements OnInit {

  
  player: number = 0;
  enemy: number = 0;

  @Input()
  set playerScore(value: number) {
    this.player = value;
  }
  get playerScore() {
    return this.player
  }

  @Input()
  set enemyScore(value: number) {
    if(value)
      this.enemy = value;
  }
  get enemyScore() {
    return this.enemy;
  }


  constructor() { }

  ngOnInit() {}

}
