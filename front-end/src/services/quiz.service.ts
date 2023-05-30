import { Injectable } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { QUIZ_LIST } from '../mocks/quizzes-list.mock';
import { Question } from '../models/question.model';
import { Answer } from '../models/answer.models';
import { ANSWER_LIST } from '../mocks/answer-list.mock';
import {HttpClient} from "@angular/common/http";
import {httpOptionsBase, serverUrl} from "../configs/server.config";
import {User} from "../models/user.models";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private quizzes: Quiz[] = [];
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes);

  private questions: Question[] = [];
  public questions$: BehaviorSubject<Question[]> = new BehaviorSubject(this.questions);
  public questionsChanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private answers: Answer[] = [];
  public answers$: BehaviorSubject<Answer[]> = new BehaviorSubject(this.answers);
  public answersChanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private quizUrl = serverUrl + '/quizzes';


  constructor(private http:HttpClient) {
    this.retrieveQuizzes();
  }

  retrieveQuizzes(): void{
    this.http.get<Quiz[]>(this.quizUrl).
    subscribe(quizList=>{
      this.quizzes=quizList;
      this.quizzes$.next(this.quizzes);
    });
  }

  addQuiz(quiz: Quiz): void {
    this.quizzes.push(quiz);
    this.quizzes$.next(this.quizzes);

    this.http.post(this.quizUrl, quiz)
      .subscribe(() => {
        this.retrieveQuizzes();
      });
  }


  deleteQuiz(quiz: Quiz): void {
    const index = this.quizzes.indexOf(quiz);
    if (index !== -1) {
      this.quizzes.splice(index, 1);
      this.quizzes$.next(this.quizzes);
    }
  }

  updateQuiz(quiz: Quiz): void {
    const index = this.quizzes.findIndex(u => u.id === quiz.id);
    console.log("Quiz edited:", this.quizzes[index]);
    if (index !== -1) {
      this.quizzes[index] = quiz;
      this.quizzes$.next(this.quizzes);

      this.http.put(`${this.quizUrl}/${quiz.id}`, quiz, httpOptionsBase).subscribe(
        () => {
          console.log('Quiz mis à jour avec succès');
        },
        error => {
          console.error('Erreur lors de la mise à jour du quiz :', error);
        }
      );
    }
  }

  getQuizById(id: string): Observable<Quiz> {
    return this.http.get<Quiz>(this.quizUrl +'/'+ id);
  }

  getQuizByName(name: string): Quiz {
    return this.quizzes.find(u => u.name === name)!;
  }

  getNumberOfQuestions(quiz: Quiz): Observable<number> {
    // Return the number of questions as an Observable
    return of(quiz.questions.length);
  }

  getQuestionById(id: number): Question {
    const question = this.questions.find(u => u.id === id)!;
    console.log("length",this.questions)
    const answers = question.answers;
    this.answers=question.answers;
    return { ...question, answers };
  }


  addAnswer(answer: Answer): void {
    this.answers.push(answer);
    this.answers$.next(this.answers);
  }

  deleteAnswer(answer: Answer){
    const index = this.answers.indexOf(answer);
    if (index !== -1) {
      this.answers.splice(index, 1);
      this.answers$.next(this.answers);
    }
  }

  addQuestion(question: Question): void {

    this.questions.push(question);
    this.questions$.next(this.questions);
  }

  deleteQuestion(question: Question){
    const index = this.questions.indexOf(question);
    if(index!==-1){
      this.questions.splice(index,1);
      this.questions$.next(this.questions);
    }
  }

}
