import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { AddQuizComponent } from './quizzes/add-quiz/add-quiz.component';
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
import { QuizCardComponent } from './quizzes/quiz-card/quiz-card.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddQuizComponent,
    QuizFormComponent,
    QuizComponent,
    QuizListComponent,
    UserComponent,
    UserFormComponent,
    UserListComponent,



    QuizCardComponent,
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
