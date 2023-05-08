import { Component } from '@angular/core';
import {GameService} from "../../../services/game.service";
import {Question} from "../../../models/question.model";
import {UsersService} from "../../../services/users.service";
import {Quiz} from "../../../models/quiz.model";
import {User} from "../../../models/user.models";
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../../../services/quiz.service";

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.scss']
})
export class GameResultComponent {
  playerScore:number=0;
  quiz!:Quiz;
  user!:User;


  constructor(private gameService: GameService,
              private userService: UsersService,
              private route:ActivatedRoute,
              private quizService:QuizService,
              ) {
    this.gameService.playerScore$.subscribe((score) => this.playerScore=score)
  }

  updateUserScore(userName: string, themeName: string, newScore: number){
    this.userService.updateUserScore(userName,themeName,newScore);
  }



  getResultMessage(): string {
    if (this.playerScore === 0) {
      return "Oups ! Vous n'avez obtenu aucune réponse correcte.";
    } else {
      return `Bravo ! Vous avez obtenu ${this.playerScore} réponses correctes.`;
    }
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.user = this.userService.getUserByName(params['player']);
      this.quiz = this.quizService.getQuizById(params['quiz'])
    });
  }

}
