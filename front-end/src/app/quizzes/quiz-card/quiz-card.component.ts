import { Component, Input } from '@angular/core';
import { Quiz } from '../../../models/quiz.model';
import {QuizService} from "../../../services/quiz-service";

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss'],
})
export class QuizCardComponent {
  @Input() quiz!: Quiz;

  constructor(private quizService:QuizService) {
  }

  editMode = false;

  onEdit() {
    this.editMode = true;
  }

  onCancel() {
    this.editMode = false;
  }

  onSave() {
    this.quizService.updateQuiz()
    this.editMode = false;
  }

  onDelete() {
    this.quizService.deleteQuiz(this.quiz);
  }
  onConfigure(){

  }
}
