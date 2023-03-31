import { Component } from '@angular/core';
import {Question} from "../../../models/question.model";
import {QUESTION_LIST} from "../../../mocks/question-list.mock";

@Component({
  selector: 'app-quiz-game',
  templateUrl: './quiz-game.component.html',
  styleUrls: ['./quiz-game.component.scss']
})
export class QuizGameComponent {

  public questionList: Question[]=QUESTION_LIST;


}
