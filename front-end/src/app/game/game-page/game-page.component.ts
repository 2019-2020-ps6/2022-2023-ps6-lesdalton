import {Component, ElementRef, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {user} from "../../../models/user.models";
import {Question} from "../../../models/question.model";
import {Quiz} from "../../../models/quiz.model";
import {Theme} from "../../../models/theme.models";
import {ThemeService} from "../../../services/theme.service";
import {GameServiceService} from "../../../services/game-service.service";
import {QuizService} from "../../../services/quiz.service";

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent {

  user: user = {config: {fontSize:16,lineHeight:12,letterSpacing:5}, id:'',firstName:'',lastName:''};

  @Input() quiz!: Quiz;
  questionsOfQuiz: Question[] = [];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private themeService: ThemeService,
    private gameService:GameServiceService,
    private quizService:QuizService,
    private elementRef:ElementRef) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.quiz = this.quizService.getQuizByName(params['quiz']);
    });
    //this.questionsOfQuiz= this.gameService.questionsByQuizId(quizId);
    this.gameService.startGame(this.quiz);
  }
}
