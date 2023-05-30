import { Component } from '@angular/core';
import {Question} from "../../../models/question.model";
import {GameService} from "../../../services/game.service";
import {User} from "../../../models/user.models";
import {UsersService} from "../../../services/users.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-game-answer',
  templateUrl: './game-answer.component.html',
  styleUrls: ['./game-answer.component.scss']
})
export class GameAnswerComponent {
  numberOfQuestions: number = 0; // Déclaration de numberOfQuestions$ comme un Observable
  currentQuestionIndex: number = 0;
  currentQuestion: Question | undefined;
  user!: User;




  constructor(protected gameService: GameService, private userService: UsersService, private route:ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.user = this.userService.getUserByName(params['name']);
    });
    this.gameService.numberOfQuestions$.subscribe((nbreQuestions:number) => {this.numberOfQuestions=nbreQuestions}); // Obtention de numberOfQuestions$ en tant qu'Observable
    this.gameService.currentQuestionIndex$.subscribe((indexQuestionEnCours:number) => {this.currentQuestionIndex=indexQuestionEnCours}); // Obtention de currentQuestionIndex$ en tant qu'Observable
    this.gameService.currentQuestion$.subscribe((QuestionEnCours:Question) => {this.currentQuestion=QuestionEnCours});
  }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.route.queryParams.subscribe(() => {
      this.userService.getUserById(id).subscribe(
        response => {
          // Handle the quiz data received in the response
          console.log(response);
          // Assign the quiz data to this.quiz
          this.user = response;
        },
        error => {
          // Handle any errors that occur during the HTTP request
          console.error(error);
        }
      );
    });
  }
}
