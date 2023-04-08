import { Component } from '@angular/core';
import {Question} from "../../../models/question.model";
import {GameServiceService} from "../../../services/game-service.service";
import {user} from "../../../models/user.models";
import {UserService} from "../../../services/user.service";
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
  user!: user;




  constructor(protected gameService: GameServiceService,private userService: UserService,private route:ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.user = this.userService.getUserByName(params['name']);
    });
    this.gameService.numberOfQuestions$.subscribe((nbreQuestions:number) => {this.numberOfQuestions=nbreQuestions}); // Obtention de numberOfQuestions$ en tant qu'Observable
    this.gameService.currentQuestionIndex$.subscribe((indexQuestionEnCours:number) => {this.currentQuestionIndex=indexQuestionEnCours}); // Obtention de currentQuestionIndex$ en tant qu'Observable
    this.gameService.currentQuestion$.subscribe((QuestionEnCours:Question) => {this.currentQuestion=QuestionEnCours});
  }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.user = this.userService.getUserById(id);
  }
}
