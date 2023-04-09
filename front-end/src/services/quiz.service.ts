import { Injectable } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';
import {BehaviorSubject, Subject} from 'rxjs';
import {QUIZ_LIST} from "../mocks/quizzes-list.mock";
import {Question} from "../models/question.model";
import {QUESTION_LIST} from "../mocks/question-list.mock";
import {Answer} from "../models/answer.models";
import {ANSWER_LIST} from "../mocks/answer-list.mock";


@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quiz:Quiz ={id:'',name:'',theme:{name:"Sans Thème"},question:[]};
  question: Question={text:'',id:0,answers:[]};
  answer: Answer={id:this.question.answers.length+1,text:'',isCorrect:false,questionId:this.question.id};

  private quizzes : Quiz[] = QUIZ_LIST;
  public quizzes$ : BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes);

  public questions: Question[]= QUESTION_LIST;
  public questions$: BehaviorSubject<Question[]>=new BehaviorSubject(this.questions)

  public questionsChanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public answers:Answer[]=this.question.answers;
  public answers$ : BehaviorSubject<Answer[]>=new BehaviorSubject(this.answers)
  public answersChanged: BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);

  constructor() {}

  addQuiz(quiz:Quiz):void{
    this.quizzes.push(quiz);
    this.quizzes$.next(this.quizzes);
    this.quiz=quiz;
  }


  deleteQuiz(quiz:Quiz){
    const index = this.quizzes.indexOf(quiz);
    if (index !== -1) {
      this.quizzes.splice(index, 1);
      this.quizzes$.next(this.quizzes);
    }
  }

  updateQuiz(){
    this.quizzes$.next(this.quizzes);
  }

  getQuizById(id: string): Quiz {
    const quiz = this.quizzes.find(u => u.id === id)!;
    this.quiz=quiz;
    return quiz;
  }

  getQuestionById(id: number): Question {
    const question=this.questions.find(u=>u.id===id)!;
    this.question=question;
    return question
  }

  addAnswer(answer: Answer){
    this.question.answers.push(answer);
    this.answers$.next(this.answers);

  }
  deleteAnswer(answer: Answer){
    const index = this.question.answers.indexOf(answer);
    if (index !== -1) {
      this.question.answers.splice(index, 1);
      this.answers$.next(this.answers);
    }
  }
  addQuestion(question: Question){
    this.questions.push(question);
    this.questions$.next(this.questions);
  }

}
