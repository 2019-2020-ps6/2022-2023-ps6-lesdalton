import { Injectable } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';
import { BehaviorSubject } from 'rxjs';
import {QUIZ_LIST} from "../mocks/quizzes-list.mock";


@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private quizzes : Quiz[] = QUIZ_LIST;
  public quizzes$ : BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes);

  constructor() {}

  addQuiz(quiz:Quiz):void{
    this.quizzes.push(quiz);
    this.quizzes$.next(this.quizzes);
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
    return quiz;
  }

}
