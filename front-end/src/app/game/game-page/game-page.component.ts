import {Component, ElementRef} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user.models";
import {Question} from "../../../models/question.model";
import {Quiz} from "../../../models/quiz.model";
import {Theme} from "../../../models/theme.models";
import {ThemeService} from "../../../services/theme.service";
import {GameServiceService} from "../../../services/game-service.service";

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent {

  user: User = {config: {fontSize:16,lineHeight:12,letterSpacing:5}, id:'',firstName:'',lastName:''};
  theme:Theme = {name:'' };

  quiz: Quiz = {id: '', name:'',theme:{name:''},question:[]};
  questionsOfQuiz: Question[] = [];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private themeService: ThemeService,
    private gameService:GameServiceService,
    private elementRef:ElementRef) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    const name = this.route.snapshot.paramMap.get('name')!;
    this.user = this.userService.getUserById(id);
    this.theme = this.themeService.getThemeByName(name);

    const quizId = this.route.snapshot.paramMap.get('quizid')!;
    //this.questionsOfQuiz= this.gameService.questionsByQuizId(quizId);
    this.gameService.startGame(quizId);



  }




}
