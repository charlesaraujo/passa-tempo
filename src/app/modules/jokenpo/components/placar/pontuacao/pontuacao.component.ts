import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-placar-pontuacao',
  templateUrl: './pontuacao.component.html',
  styleUrls: ['./pontuacao.component.scss'],
})
export class PontuacaoComponent implements OnInit {

  
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
