import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { QuizComponent } from './quizzes/quiz/quiz.component';
import {QuizFormComponent} from "./quizzes/quiz-form/quiz-form.component";



const routes: Routes = [
  { path:'edit-quiz',component:EditQuizComponent},
  { path:'quiz',component:QuizComponent },
  { path:'quiz-form',component:QuizFormComponent }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
