import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';
import {QuizService} from "../../../services/quiz-service";

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {
  quizzes: Quiz[] = [];

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.quizzes$.subscribe(quizzes => {
      this.quizzes = quizzes;
    });
  }

  editQuiz(quiz: Quiz): void {

  }

  deleteQuiz(quiz: Quiz): void {
    this.quizService.deleteQuiz(quiz);
  }
}
