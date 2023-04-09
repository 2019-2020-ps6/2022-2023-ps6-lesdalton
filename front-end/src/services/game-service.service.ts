import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import {Question} from "../models/question.model";
import {Histoire_de_France_questions} from "../mocks/question-list.mock";
import {Answer} from "../models/answer.models";
import {Router} from "@angular/router";
import {Quiz} from "../models/quiz.model";

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
  questionsList:Question[] = Histoire_de_France_questions;

  public playerScore$:BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public currentQuestionIndex$:BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public currentQuestion$:BehaviorSubject<Question> = new BehaviorSubject<Question>(Histoire_de_France_questions[this.currentQuestionIndex$.value]);
  public numberOfQuestions$:BehaviorSubject<number> = new BehaviorSubject<number>(0);





  private questionsOfQuiz: Question[] = [];

  constructor(private router: Router) { }

  quizQuestions(quiz:Quiz): Question[] {
    return quiz.questions;
  }

  startGame(quiz:Quiz){
    let gameQuestions:Question[] = this.quizQuestions(quiz);
    this.numberOfQuestions$.next(this.questionsOfQuiz.length);
    this.currentQuestionIndex$.next(0);

    this.currentQuestion$.next(gameQuestions[this.currentQuestionIndex$.value]);

  }

  getNumberOfQuestions$(): Observable<number> { // Méthode pour obtenir numberOfQuestions$ en tant qu'Observable
    return this.numberOfQuestions$.asObservable();
  }



  public checkAnswer(answer: Answer) {
    // Vérifier si la réponse est correcte ou non
    if (answer.isCorrect) {
      console.log("Bonne réponse !");
      this.playerScore$.next(this.playerScore$.value + 1);
      console.log("SCORE : "+this.playerScore$.value);
      // Mettre à jour le score, le temps restant, etc.
    } else {
      console.log("Mauvaise réponse !");
      // Afficher un message d'erreur, déduire des points, etc.
    }
    this.getNextQuestion()


  }

  getNextQuestion(){
    if(this.currentQuestionIndex$.value < this.questionsOfQuiz.length-1){
      this.currentQuestionIndex$.next(this.currentQuestionIndex$.value+1);
      this.currentQuestion$.next(Histoire_de_France_questions[this.currentQuestionIndex$.value]);
    }else {
      console.log("fin du quiz");
      this.router.navigateByUrl('/result');
    }

  }

  resetGame(){

  }

  setCurrentQuestionIndex(index: number) {
    this.currentQuestionIndex$.next(index);
    this.currentQuestion$.next(this.questionsOfQuiz[index]);
  }



}
