import { Component } from '@angular/core';
import {GameService} from "../../../services/game.service";
import {Question} from "../../../models/question.model";

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.scss']
})
export class GameResultComponent {
  playerScore:number=0;


  constructor(private gameService: GameService) {
    this.gameService.playerScore$.subscribe((score) => this.playerScore=score)
  }

  getResultMessage(): string {
    if (this.playerScore === 0) {
      return "Oups ! Vous n'avez obtenu aucune réponse correcte.";
    } else if (this.playerScore < 5) {
      return `Pas mal ! Vous avez obtenu ${this.playerScore} réponses correctes.`;
    } else if (this.playerScore < 10) {
      return `Bravo ! Vous avez obtenu ${this.playerScore} réponses correctes.`;
    } else {
      return `Félicitations ! Vous avez obtenu un score parfait de ${this.playerScore} réponses correctes !`;
    }
  }

}
