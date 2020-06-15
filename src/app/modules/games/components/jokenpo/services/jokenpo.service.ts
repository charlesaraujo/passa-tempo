import { Injectable } from '@angular/core';
import { JokenpoPlayerEnum, JokenpoEnum } from './jokenpo.enum';

@Injectable({
  providedIn: 'root'
})
export class JokenpoService {

  constructor() { }

  /**
   * Gera um numero aleatorio para entre 0 e 2 para ser a resposta da maquina
   * @return number
   */
  getEnemyChoice(): number {
    const randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
  }

  /**
   * Com base nas escolhass reetorna quem ganhou
   * @param player escolha do player
   * @param enemy escolha do inimigo
   */
  game(player: number, enemy: number): number {
    if ( player === enemy ){
      return JokenpoPlayerEnum.DRAW;
    }

    if (
        (player === JokenpoEnum.PAPEL && enemy === JokenpoEnum.PEDRA) ||
        (player === JokenpoEnum.PEDRA && enemy === JokenpoEnum.TESOURA) ||
        (player === JokenpoEnum.TESOURA && enemy === JokenpoEnum.PAPEL)
       ){
        return JokenpoPlayerEnum.PLAYER;
      }

    return JokenpoPlayerEnum.ENEMY;
  }
}
