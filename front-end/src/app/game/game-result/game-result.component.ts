import { Component } from '@angular/core';
import {GameServiceService} from "../../../services/game-service.service";
import {Question} from "../../../models/question.model";

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.scss']
})
export class GameResultComponent {
  playerScore:number=0;


  constructor(private gameService: GameServiceService) {
    this.gameService.playerScore$.subscribe((score) => this.playerScore=score)
  }

}
