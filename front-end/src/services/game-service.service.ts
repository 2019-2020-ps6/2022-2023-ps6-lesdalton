import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import {Question} from "../models/question.model";
import {QUESTION_LIST} from "../mocks/question-list.mock";
import {Answer} from "../models/answer.models";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
  questionsList:Question[] = QUESTION_LIST;

  public playerScore$:BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public currentQuestionIndex$:BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public currentQuestion$:BehaviorSubject<Question> = new BehaviorSubject<Question>(QUESTION_LIST[this.currentQuestionIndex$.value]);
  public numberOfQuestions$:BehaviorSubject<number> = new BehaviorSubject<number>(0);





  private questionsOfQuiz: Question[] = [];

  constructor(private router: Router) { }

  questionsByQuizId(id: string): Question[]{
    let questions:Question[] = [];
    let nId=+id;
    //console.log("nID = " + nId);
    for (const question of this.questionsList ){
      //console.log("quizId = "+ question.quizId);
      if(question.quizId==nId){
        //console.log(question);
        questions.push(question);
      }
    }
    this.questionsOfQuiz=questions;
    //console.log(this.questionsOfQuiz);
    return questions;
  }

  startGame(quizId:string){
    let gameQuestions:Question[] = this.questionsByQuizId(quizId);
    this.numberOfQuestions$.next(this.questionsOfQuiz.length);
    this.currentQuestionIndex$.next(0);

    this.currentQuestion$.next(gameQuestions[this.currentQuestionIndex$.value]);

  }

  getNumberOfQuestions(quizId:string){
    return this.questionsByQuizId(quizId).length;
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
      this.currentQuestion$.next(QUESTION_LIST[this.currentQuestionIndex$.value]);
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
