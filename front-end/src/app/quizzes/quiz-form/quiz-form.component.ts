import { Component } from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Quiz } from "../../../models/quiz.model";
import {QuizService} from "../../../services/quiz.service";
import {Theme} from "../../../models/theme.models";
import {ThemeService} from "../../../services/theme.service";

@Component({
  selector: 'app-quiz-form',
  templateUrl: 'quiz-form.component.html',
  styleUrls:['quiz-form.component.scss']
})
export class QuizFormComponent {

  public themeList:Theme[] = this.themeService.themes;

  quizForm = new FormGroup({
    name: new FormControl(),
    theme: new FormControl(),
    id: new FormControl(),
  });

  constructor(private quizService: QuizService,private themeService: ThemeService) {}

  onSubmit() {
    const quiz:Quiz = {
      name: this.quizForm.controls.name.value, // set the name property
      theme: {name:this.quizForm.controls.theme.value},// set the theme property
      id: this.quizForm.controls.id.value,
      questions:[]
    }; // create a new Quiz instance
    console.log(this.quizForm.controls.theme.value)
    this.quizService.addQuiz(quiz);
    this.quizForm.reset();
    console.log(this.quizService.quizzes$.value)
  }
}
