import { Component } from '@angular/core';
import {Quiz} from "../../../models/quiz.model";
import {QUIZ_LIST} from "../../../mocks/quizzes-list.mock";
import {QuizService} from "../../../services/quiz.service";

@Component({
  selector: 'app-theme-quizzes-list',
  templateUrl: './theme-quizzes-list.component.html',
  styleUrls: ['./theme-quizzes-list.component.scss']
})
export class ThemeQuizzesListComponent {
  public quizzes: Quiz[] = QUIZ_LIST;

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quizService.quizzes$.subscribe((quizzes) => (this.quizzes = quizzes));
  }

  onQuizChange(updatedQuiz: Quiz) {
    const index = this.quizzes.findIndex((quiz) => quiz.id === updatedQuiz.id);
    this.quizzes[index] = updatedQuiz; // update the quiz object with the emitted value
  }
}
