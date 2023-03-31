import { Component } from '@angular/core';
import {Question} from "../../../models/question.model";
import {QUESTION_LIST} from "../../../mocks/question-list.mock";
import {Answer} from "../../../models/answer.models";

@Component({
  selector: 'app-quiz-game',
  templateUrl: './quiz-game.component.html',
  styleUrls: ['./quiz-game.component.scss']
})
export class QuizGameComponent {

  public questionList: Question[]=QUESTION_LIST;
  currentQuestionIndex = 0;
  currentQuestion: Question=QUESTION_LIST[this.currentQuestionIndex];
  showAnswer = false;
  answerMessage = "";

  ngOnInit(): void {
    this.currentQuestion = this.questionList[this.currentQuestionIndex];
  }

  onAnswerSelected(answer: Answer): void {
    if (answer.isCorrect) {
      this.answerMessage = "Bonne réponse!";
    } else {
      this.answerMessage = "Mauvaise réponse.";
    }
    this.showAnswer = true;
  }

  nextQuestion(): void {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.questionList.length) {
      this.currentQuestion = this.questionList[this.currentQuestionIndex];
      this.showAnswer = false;
      this.answerMessage = "";
    } else {
      // Quiz terminé
    }
  }
}


