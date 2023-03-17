import { Component } from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Quiz } from "../../../models/quiz.model";
import {QuizService} from "../../../services/quiz-service";

@Component({
  selector: 'app-quiz-form',
  templateUrl: 'quiz-form.component.html',
  styleUrls:['quiz-form.component.scss']
})
export class QuizFormComponent {
  private name:string = "";
  private theme:string = "";

  quizForm = new FormGroup({
    name: new FormControl(),
    theme: new FormControl()
  });

  constructor(private quizService: QuizService) {}

  onSubmit() {
    const quiz:Quiz = {
      name: this.quizForm.controls.name.value, // set the name property
      theme: this.quizForm.controls.theme.value// set the theme property
    }; // create a new Quiz instance
    this.quizService.addQuiz(quiz);
    this.quizForm.reset();
    console.log(this.quizService.quizzes$.value)
  }
}
