import {Component, Input} from '@angular/core';
import {Quiz} from "../../../models/quiz.model";
import {QUIZ_LIST} from "../../../mocks/quizzes-list.mock";
import {QuizService} from "../../../services/quiz.service";
import {Theme} from "../../../models/theme.models";
import {ThemeService} from "../../../services/theme.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-theme-quizzes-list',
  templateUrl: './theme-quizzes-list.component.html',
  styleUrls: ['./theme-quizzes-list.component.scss']
})
export class ThemeQuizzesListComponent {

  public theme:Theme = {name:''};

  public quizzes: Quiz[] = QUIZ_LIST;

  constructor(private quizService: QuizService,private themeService:ThemeService,private route:ActivatedRoute) {}

  ngOnInit() {
    this.quizService.quizzes$.subscribe((quizzes) => (this.quizzes = quizzes));
    const name = this.route.snapshot.paramMap.get('theme-name')!;
    this.theme = this.themeService.getThemeByName(name);
  }

  onQuizChange(updatedQuiz: Quiz) {
    const index = this.quizzes.findIndex((quiz) => quiz.id === updatedQuiz.id);
    this.quizzes[index] = updatedQuiz; // update the quiz object with the emitted value
  }
}
