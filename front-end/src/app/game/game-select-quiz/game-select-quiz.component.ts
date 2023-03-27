import { Component } from '@angular/core';
import {User} from "../../../models/user.models";
import {USER} from "../../../mocks/user-list.mock";
import {Theme} from "../../../models/theme.models";
import {Quiz} from "../../../models/quiz.model";
import {QuizzesMocks} from "../../../mocks/quizzes-list.mock";
import {ThemeMocks} from "../../../mocks/theme.mocks";


@Component({
  selector: 'app-game-select-quiz',
  templateUrl: './game-select-quiz.component.html',
  styleUrls: ['./game-select-quiz.component.scss']
})
export class GameSelectQuizComponent {
  QuizList:Quiz[] = QuizzesMocks;

  showQuiz(theme: string){

  }
}
