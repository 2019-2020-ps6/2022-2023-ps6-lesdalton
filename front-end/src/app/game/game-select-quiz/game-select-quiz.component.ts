import {Component, ElementRef, Input} from '@angular/core';
import {User} from "../../../models/user.models";
import {USER} from "../../../mocks/user-list.mock";
import {Theme} from "../../../models/theme.models";
import {Quiz} from "../../../models/quiz.model";
import {QuizzesMocks} from "../../../mocks/quizzes-list.mock";
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
  QuizList:Quiz[] = QuizzesMocks;
  quizForTheme:Quiz[] = [];

  user: User = {id:'',firstName:'',lastName:''};
  theme:Theme = {name:'' };

  constructor(private route: ActivatedRoute, private userService: UserService, private themeService: ThemeService, private elementRef:ElementRef) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    const name = this.route.snapshot.paramMap.get('name')!;
    this.user = this.userService.getUserById(id);
    this.theme = this.themeService.getThemeByName(name);
    this.showQuiz(this.theme.name);
  }


  showQuiz(theme: string){
    for (const quiz of this.QuizList ){
      if(quiz.theme==theme){
        this.quizForTheme.push(quiz);
      }
    }
  }
}
