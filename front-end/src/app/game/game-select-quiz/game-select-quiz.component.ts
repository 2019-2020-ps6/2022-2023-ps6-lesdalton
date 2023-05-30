import {Component, ElementRef, Input} from '@angular/core';
import {User} from "../../../models/user.models";
import {USER} from "../../../mocks/user-list.mock";
import {Theme} from "../../../models/theme.models";
import {Quiz} from "../../../models/quiz.model";
import {QUIZ_LIST} from "../../../mocks/quizzes-list.mock";
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../../services/users.service";
import {ThemeService} from "../../../services/theme.service";
import {QuizService} from "../../../services/quiz.service";


@Component({
  selector: 'app-game-select-quiz',
  templateUrl: './game-select-quiz.component.html',
  styleUrls: ['./game-select-quiz.component.scss']
})


export class GameSelectQuizComponent {
  quizList:Quiz[] = [];
  quizForTheme:Quiz[] = [];

  @Input() theme!:Theme;
  @Input() user!:User;


  constructor(private route: ActivatedRoute, private userService: UsersService,
              private themeService: ThemeService,
              private quizSevice:QuizService,
              private elementRef:ElementRef) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.theme = this.themeService.getThemeByName(params['theme']);
    });
    this.route.queryParams.subscribe(params => {
      this.user = this.userService.getUserByName(params['user']);
    });
    this.quizSevice.quizzes$.subscribe((quizzes) => (this.quizList =quizzes));
    this.showQuiz(this.theme.name);
  }


  showQuiz(theme: string){
    for (const quiz of this.quizList ){
      if(quiz.theme.name==theme){
        this.quizForTheme.push(quiz);
      }
    }
  }
}
