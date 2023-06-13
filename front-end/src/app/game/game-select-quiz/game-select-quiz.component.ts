import {Component, ElementRef, Input} from '@angular/core';
import {User} from "../../../models/user.models";
import {Theme} from "../../../models/theme.models";
import {Quiz} from "../../../models/quiz.model";
import {QUIZ_LIST} from "../../../mocks/quizzes-list.mock";
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../../services/users.service";
import {ThemeService} from "../../../services/theme.service";
import {QuizService} from "../../../services/quiz.service";
import {UserConfigModel} from "../../../models/user-config.model";


@Component({
  selector: 'app-game-select-quiz',
  templateUrl: './game-select-quiz.component.html',
  styleUrls: ['./game-select-quiz.component.scss']
})


export class GameSelectQuizComponent {
  quizList:Quiz[] = [];
  quizForTheme:Quiz[] = [];
  noQuizzes:boolean = false;

  @Input() theme:Theme={name:""};
  @Input() user: User = {
    firstName: "",
    lastName: "",
    id: "",
    stats: {
      statsByTheme: []
    },
    config: {} as UserConfigModel // Assign an empty UserConfigModel object
  };


  constructor(private route: ActivatedRoute, private userService: UsersService,
              private themeService: ThemeService,
              private quizSevice:QuizService) {}
  ngOnInit() {
    const user = this.route.snapshot.queryParamMap.get('user')!;
    const theme = this.route.snapshot.queryParamMap.get('theme')!;
    console.log(theme);

    this.themeService.themes$.subscribe(themes => {
      this.theme = themes.find(u => u.name === theme)!;
      console.log(this.theme + ' theme yes');

      this.userService.getUserById(user).subscribe(
        response => {
          // Handle the user data received in the response
          console.log(response);
          // Assign the user data to this.user
          this.user = response;
          if (this.user && this.theme) {
            this.showQuiz();
          }
        },
        error => {
          // Handle any errors that occur during the HTTP request
          console.error(error);
        }
      );
    });

    this.quizSevice.quizzes$.subscribe((quizzes) => (this.quizList = quizzes));
  }




  showQuiz() {
    this.quizForTheme = []; // Clear the array before adding quizzes
    for (const quiz of this.quizList) {
      if (quiz.theme.name === this.theme.name && quiz.questions.length>0) {
        this.quizForTheme.push(quiz);
      }
    }
    if(this.quizForTheme.length===0){
      this.noQuizzes = true
    }
  }
}
