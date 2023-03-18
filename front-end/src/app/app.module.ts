import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { QuizFormComponent } from './quizzes/quiz-form/quiz-form.component';
import {QuizComponent} from "./quizzes/quiz/quiz.component";
import {QuizListComponent} from "./quizzes/quiz-list/quiz-list.component";

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './users/user/user.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    EditQuizComponent,
    QuizFormComponent,
    QuizComponent,
    QuizListComponent,
    UserComponent,
    UserFormComponent,
    UserListComponent,


  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
