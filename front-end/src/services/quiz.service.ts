import { Injectable } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { QUIZ_LIST } from '../mocks/quizzes-list.mock';
import { Question } from '../models/question.model';
import { Answer } from '../models/answer.models';
import { ANSWER_LIST } from '../mocks/answer-list.mock';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private quizzes: Quiz[] = QUIZ_LIST;
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes);

  private questions: Question[] = [];
  public questions$: BehaviorSubject<Question[]> = new BehaviorSubject(this.questions);
  public questionsChanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private answers: Answer[] = [];
  public answers$: BehaviorSubject<Answer[]> = new BehaviorSubject(this.answers);
  public answersChanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  constructor() {}

  addQuiz(quiz: Quiz): void {
    this.quizzes.push(quiz);
    this.quizzes$.next(this.quizzes);
  }

  deleteQuiz(quiz: Quiz): void {
    const index = this.quizzes.indexOf(quiz);
    if (index !== -1) {
      this.quizzes.splice(index, 1);
      this.quizzes$.next(this.quizzes);
    }
  }

  updateQuiz(): void {
    this.quizzes$.next(this.quizzes);
  }

  getQuizById(id: string): Quiz {
    const quiz = this.quizzes.find(u => u.id === id)!;
    this.questions = quiz.questions;
    this.questions$.next(this.questions);
    return quiz;
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
    this.answers=question.answers;
    return question;
  }

  addAnswer(answer: Answer): void {
    this.answers.push(answer);
    this.answers$.next(this.answers);
  }

  deleteAnswer(answer: Answer): void {
    const index = this.questions[this.questions.length - 1].answers.indexOf(answer);
    if (index !== -1) {
      this.questions[this.questions.length - 1].answers.splice(index, 1);
      this.answers$.next(this.questions[this.questions.length - 1].answers);
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
