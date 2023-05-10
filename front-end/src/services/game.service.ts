import {EventEmitter, Injectable} from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Question } from "../models/question.model";
import { Answer } from "../models/answer.models";
import { Router } from "@angular/router";
import { Quiz } from "../models/quiz.model";
import {QUIZ_LIST} from "../mocks/quizzes-list.mock";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public playerScore$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public currentQuestionIndex$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public currentQuestion$: BehaviorSubject<Question>;
  public numberOfQuestions$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public gameFinished: EventEmitter<{ score: number, quizId: string }> = new EventEmitter<{ score: number, quizId: string }>();


  private quiz: Quiz=QUIZ_LIST[0];

  constructor(private router: Router) {
    this.currentQuestion$ = new BehaviorSubject<Question>(this.quiz.questions[this.currentQuestionIndex$.value]);
  }

  quizQuestions(quiz: Quiz): Question[] {
    return quiz.questions;
  }

  startGame(quiz: Quiz) {
    this.playerScore$ = new BehaviorSubject<number>(0);
    this.quiz = quiz;
    let gameQuestions: Question[] = this.quizQuestions(quiz);
    this.numberOfQuestions$.next(quiz.questions.length);
    this.currentQuestionIndex$.next(0);

    this.currentQuestion$.next(gameQuestions[this.currentQuestionIndex$.value]);
  }

  getNumberOfQuestions$(): Observable<number> {
    return this.numberOfQuestions$.asObservable();
  }

  public checkAnswer(answer: Answer) {
    if (answer.isCorrect) {
      console.log("Bonne réponse !");


      this.playerScore$.next(this.playerScore$.value + 1);
      console.log("SCORE : " + this.playerScore$.value);
    } else {
      console.log("Mauvaise réponse !");
    }

    /*if (answer.isCorrect) {
      console.log("Bonne réponse !");


      this.playerScore$.next(this.playerScore$.value + 1);
      console.log("SCORE : " + this.playerScore$.value);
    } else {
      console.log("Mauvaise réponse !");
    }*/



    // Attendre 3 secondes avant d'exécuter getNextQuestion()
    setTimeout(() => {
      this.getNextQuestion(this.quiz);
    }, 1000); // 3000 millisecondes = 3 secondes

    //this.getNextQuestion(this.quiz);
  }



  showAnswer(answer: Answer){
    //modifie le background des bonnes et mauvaises reponses pendant 2s
    const boutonAns = document.querySelector('button')!;
    if (answer.isCorrect) {
      console.log("Bonne réponse !");
      boutonAns.style.backgroundColor = 'green';
      this.playerScore$.next(this.playerScore$.value + 1);
      console.log("SCORE : " + this.playerScore$.value);
    } else if(!answer.isCorrect) {
      boutonAns.style.backgroundColor = 'red';
    }
  }




  getNextQuestion(quiz: Quiz) {
    if (this.currentQuestionIndex$.value < quiz.questions.length - 1) {
      this.currentQuestionIndex$.next(this.currentQuestionIndex$.value + 1);
      this.currentQuestion$.next(this.quiz.questions[this.currentQuestionIndex$.value]);
    } else {
      console.log("Fin du quiz");
      this.gameFinished.emit({ score: this.playerScore$.value, quizId: this.quiz.id });
    }
  }

  resetGame() {
    //TODO: Add implementation
  }

  setCurrentQuestionIndex(index: number) {
    this.currentQuestionIndex$.next(index);
    this.currentQuestion$.next(this.quiz.questions[index]);
  }
}
