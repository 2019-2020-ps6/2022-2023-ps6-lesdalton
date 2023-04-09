import {Component, ElementRef, Input} from '@angular/core';
import {user} from "../../../models/user.models";
import {USER} from "../../../mocks/user-list.mock";
import {Theme} from "../../../models/theme.models";
import {Quiz} from "../../../models/quiz.model";
import {QUIZ_LIST} from "../../../mocks/quizzes-list.mock";
import {THEME_LIST} from "../../../mocks/theme.mocks";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {ThemeService} from "../../../services/theme.service";


@Component({
  selector: 'app-game-select-quiz',
  templateUrl: './game-select-quiz.component.html',
  styleUrls: ['./game-select-quiz.component.scss']
})


export class GameSelectQuizComponent {
  QuizList:Quiz[] = QUIZ_LIST;
  quizForTheme:Quiz[] = [];

  @Input() theme!:Theme;
  @Input() user!:user;


  constructor(private route: ActivatedRoute, private userService: UserService, private themeService: ThemeService, private elementRef:ElementRef) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.theme = this.themeService.getThemeByName(params['theme']);
    });
    this.route.queryParams.subscribe(params => {
      this.user = this.userService.getUserByName(params['user']);
    });
    this.showQuiz(this.theme.name);
  }


  showQuiz(theme: string){
    for (const quiz of this.QuizList ){
      if(quiz.theme.name==theme){
        this.quizForTheme.push(quiz);
      }
    }
  }
}
