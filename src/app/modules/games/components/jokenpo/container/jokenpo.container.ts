import { Component } from '@angular/core';
import { JokenpoEnum, JokenpoPlayerEnum, JokenpoService } from '../services';

@Component({
  selector: 'app-jokenpo',
  templateUrl: 'jokenpo.container.html',
  styleUrls: ['jokenpo.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class JokenpoContainer {

  config = {
    players: {
      player: {
        player: JokenpoPlayerEnum.PLAYER,
        label: 'Você',
        value: 0
      },
      enemy: {
        player: JokenpoPlayerEnum.ENEMY,
        label: 'Inimigo',
        value: 0
      }
    },
    result: {
      label: 'Faça sua escolha',
      whoWin:  JokenpoPlayerEnum.NONE
    },
    options: [
      {
        label: 'Papel',
        img: 'assets/img/jokenpo/paper.png',
        value: JokenpoEnum.PAPEL,
        choice: JokenpoPlayerEnum.NONE
      },
      {
        label: 'Pedra',
        img: 'assets/img/jokenpo/rock.png',
        value: JokenpoEnum.PEDRA,
        choice: JokenpoPlayerEnum.NONE
      },
      {
        label: 'Tesoura',
        img: 'assets/img/jokenpo/scissors.png',
        value: JokenpoEnum.TESOURA,
        choice: JokenpoPlayerEnum.NONE
      },
    ]
  };

  private jokenpoService = new JokenpoService();
  public enableConfirm: boolean;
  private optionsLength: number = this.config.options.length;
  private pChoice: number;
  private eChoice: number;

  /**
   * Reseta os dados para a proxima escolha
   */
 reset(){

    this.config.result.label = 'Confirme sua escolha';
    this.config.result.whoWin = JokenpoPlayerEnum.NONE;
    this.playerChoice(-1);
    this.enableConfirm = false;
  }

  /**
   * Atualiza os pontos do vencedor e coloca a MSG
   * @param winner enum player
   */
  dealWithWinner(winner: number): void{
    this.config.result.whoWin = winner;
    switch (winner) {
      case JokenpoPlayerEnum.PLAYER:
        this.config.players.player.value = this.config.players.player.value + 1;
        this.config.result.label = 'Você venceu :)';
        break;
      case JokenpoPlayerEnum.ENEMY:
        this.config.players.enemy.value = this.config.players.enemy.value + 1;
        this.config.result.label = 'Você perdeu :(';
        break;
      case JokenpoPlayerEnum.DRAW:
        this.config.result.label = 'Vocês empataram :|';
        break;
    }
    // this.reset();
  }

  /**
   * Acionado ao confirmar e começa as chamadas
   */
  confirm(){
    this.enemyChoice();
    this.enableConfirm = false;
    const winner = this.winner();
    this.dealWithWinner(winner);
  }

  /**
   * Verifica o Vencedor
   */
  winner(): number {
    return this.jokenpoService.game(this.pChoice, this.eChoice);
  }
  /**
   * Muda a escolha no objeto de options para a escolha do player
   * @param index indice do array
   */
  async playerChoice(index: number){
    this.pChoice = null;
    this.enableConfirm = true;
    for (let i = 0; i < this.optionsLength; i++) {
      const element = this.config.options[i];
      if ( index === i ) {
          element.choice = JokenpoPlayerEnum.PLAYER;
          this.pChoice = element.value;
      }else{
        element.choice = JokenpoPlayerEnum.NONE;
      }
    }
  }

  /**
   * Muda a escolha no objeto de options para a escolha do inimigo
   */
  enemyChoice(): void{
    this.eChoice = this.jokenpoService.getEnemyChoice();
    for (let i = 0; i < this.optionsLength; i++) {
      const element = this.config.options[i];
      if ( element.value === this.eChoice ) {
        if (this.pChoice === this.eChoice){
          element.choice = JokenpoPlayerEnum.DRAW;
        }else{
          element.choice = JokenpoPlayerEnum.ENEMY;
        }
      }
    }
  }

}
