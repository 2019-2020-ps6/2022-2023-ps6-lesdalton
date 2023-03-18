import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuizComponent } from './quizzes/add-quiz/add-quiz.component';
import { QuizComponent } from './quizzes/quiz/quiz.component';
import {QuizFormComponent} from "./quizzes/quiz-form/quiz-form.component";
import {UserComponent} from "./users/user/user.component";
import {UserFormComponent} from "./users/user-form/user-form.component";
import {UserListComponent} from "./users/user-list/user-list.component";



const routes: Routes = [
  { path:'add-quiz',component:AddQuizComponent},
  { path:'quiz',component:QuizComponent },
  { path:'quiz-form',component:QuizFormComponent },

  {path: 'user',component:UserComponent},
  {path: 'user-form',component:UserFormComponent},
  {path: 'user-list',component:UserListComponent},

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
