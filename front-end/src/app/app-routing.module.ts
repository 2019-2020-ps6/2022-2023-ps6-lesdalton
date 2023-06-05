import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuizComponent } from './quizzes/add-quiz/add-quiz.component';
import { QuizComponent } from './quizzes/quiz/quiz.component';
import {QuizFormComponent} from "./quizzes/quiz-form/quiz-form.component";
import {UserComponent} from "./users/user/user.component";
import {UserFormComponent} from "./users/user-form/user-form.component";
import {UserListComponent} from "./users/user-list/user-list.component";
import {LoginComponent} from "./login/login.component";
import {ActionsComponent} from "./actions/actions.component";
import {LoginNewAccountComponent} from "./login-new-account/login-new-account.component";
import {GamePageComponent} from "./game/game-page/game-page.component"
import {GameSelectPlayerComponent} from "./game/game-select-player/game-select-player.component";
import {GameSelectThemeComponent} from "./game/game-select-theme/game-select-theme.component";
import {UserConfigComponent} from "./users/user-config/user-config.component";
import {GameSelectQuizComponent} from "./game/game-select-quiz/game-select-quiz.component";
import {ConfigPopUpComponent} from "./config-pop-up/config-pop-up.component";
import {GameResultComponent} from "./game/game-result/game-result.component";
import {PasswordComponent} from "./password/password.component";
import {PasswordQuizComponent} from "./password-quiz/password-quiz.component";
import {ThemeQuizzesListComponent} from "./themes/theme-quizzes-list/theme-quizzes-list.component";
import {QuizGameComponent} from "./game/quiz-game/quiz-game.component";
import {QuizConfigComponent} from "./quizzes/quiz-config/quiz-config.component";
import {QuizConfigQuestionComponent} from "./quizzes/quiz-config-question/quiz-config-question.component";
import {PresentationComponent} from "./presentation/presentation.component";
import {UserStatsComponent} from "./users/user-stats/user-stats.component";


const routes: Routes = [
  { path:'game', component:GamePageComponent},
  { path:'select-player', component:GameSelectPlayerComponent},
  {path:'select-theme', component:GameSelectThemeComponent},
  {path:'select-quiz', component:GameSelectQuizComponent},
  {path:'game-page', component:GamePageComponent},
  {path:'result', component:GameResultComponent},
  { path:'select-player/:id', component:GameSelectPlayerComponent},
  { path:'select-player/:id/select-theme/:theme-name', component:ThemeQuizzesListComponent},


  { path:'add-quiz',component:AddQuizComponent},
  { path:'quiz',component:QuizComponent },
  { path:'quiz-form',component:QuizFormComponent },

  {path: 'user',component:UserComponent},
  {path: 'user-form',component:UserFormComponent},
  {path: 'user-list',component:UserListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'actions', component:ActionsComponent},
  {path: "login-new-account", component: LoginNewAccountComponent},
  {path: "user-config", component: UserConfigComponent},
  {path: "user-stats",component: UserStatsComponent},

  {path: "config-pop-up", component: ConfigPopUpComponent},
  {path:"password",component: PasswordComponent},
  {path: "password-quiz",component:PasswordQuizComponent},
  {path:"quiz-game",component: QuizGameComponent},
  {path: "quiz-config/:id",component: QuizConfigComponent},
  {path:"quiz-config/:id/:question-id",component:QuizConfigQuestionComponent},
  {path:"qui-sommes-nous",component:PresentationComponent},

  {path:"quiz-config/:id/question-config",component:QuizConfigQuestionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
