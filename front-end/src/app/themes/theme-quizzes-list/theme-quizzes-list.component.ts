import {Component, Input} from '@angular/core';
import {Quiz} from "../../../models/quiz.model";
import {QUIZ_LIST} from "../../../mocks/quizzes-list.mock";
import {QuizService} from "../../../services/quiz.service";
import {Theme} from "../../../models/theme.models";
import {ThemeService} from "../../../services/theme.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../../models/user.models";
import {UsersService} from "../../../services/users.service";

@Component({
  selector: 'app-theme-quizzes-list',
  templateUrl: './theme-quizzes-list.component.html',
  styleUrls: ['./theme-quizzes-list.component.scss']
})
export class ThemeQuizzesListComponent {

  public theme:Theme = {name:''};
  public user:User = {firstName:'',lastName:'',id:'',config:{fontSize:16,lineHeight:10,letterSpacing:5},stats: {statsByTheme: [{themeName: "Histoire", themePoints: 15},{themeName: "Cinéma",themePoints: 20}]}};

  public quizzes: Quiz[] = QUIZ_LIST;


  getQuizzes(){
    let themeQuizzes:Quiz[]=[]
    this.quizzes.forEach((quiz) =>{
      if(quiz.theme?.name === this.theme.name){
        themeQuizzes.push(quiz);
      }
    })
    return themeQuizzes;
  }

  constructor(private quizService: QuizService,private themeService:ThemeService,private route:ActivatedRoute,
              private userService:UsersService) {}

  ngOnInit() {
    this.quizService.quizzes$.subscribe((quizzes) => (this.quizzes = quizzes));
    const name = this.route.snapshot.paramMap.get('theme-name')!;
    this.theme = this.themeService.getThemeByName(name)
    const id = this.route.snapshot.paramMap.get('user')!;
    this.route.queryParams.subscribe(params => {
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

  onQuizChange(updatedQuiz: Quiz) {
    const index = this.quizzes.findIndex((quiz) => quiz.id === updatedQuiz.id);
    this.quizzes[index] = updatedQuiz; // update the quiz object with the emitted value
  }
}
