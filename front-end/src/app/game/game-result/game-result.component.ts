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
    } else {
      return `Bravo ! Vous avez obtenu ${this.playerScore} réponses correctes.`;
    }
  }

}
