import { Component } from '@angular/core';
import {Question} from "../../../models/question.model";
import {Histoire_de_France_questions} from "../../../mocks/question-list.mock";
import {Answer} from "../../../models/answer.models";

@Component({
  selector: 'app-quiz-game',
  templateUrl: './quiz-game.component.html',
  styleUrls: ['./quiz-game.component.scss']
})
export class QuizGameComponent {

  public questionList: Question[]=Histoire_de_France_questions;
  currentQuestionIndex = 0;
  currentQuestion: Question=Histoire_de_France_questions[this.currentQuestionIndex];
  showAnswer = false;
  answerMessage = "";
  point=0;

  ngOnInit(): void {
    this.currentQuestion = this.questionList[this.currentQuestionIndex];
  }

  answerColor(answer: Answer): string {
    if(answer.isCorrect){
      return "#ef6d58";
    }
    return "";
  }

  onAnswerSelected(answer: Answer): void {
    this.answerColor(answer)
    if (answer.isCorrect) {
      this.answerMessage = "Bonne réponse!";
      this.point+=1;

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


