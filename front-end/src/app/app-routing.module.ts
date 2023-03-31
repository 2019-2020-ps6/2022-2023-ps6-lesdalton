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
import {UserCardComponent} from "./users/user-card/user-card.component";
import {GamePageComponent} from "./game/game-page/game-page.component"
import {GameSelectPlayerComponent} from "./game/game-select-player/game-select-player.component";
import {GameSelectThemeComponent} from "./game/game-select-theme/game-select-theme.component";
import {UserConfigComponent} from "./users/user-config/user-config.component";
import {ConfigPopUpComponent} from "./config-pop-up/config-pop-up.component";
import {PasswordComponent} from "./password/password.component";
import {PasswordQuizComponent} from "./password-quiz/password-quiz.component";
import {ThemeQuizzesListComponent} from "./themes/theme-quizzes-list/theme-quizzes-list.component";
import {QuizGameComponent} from "./game/quiz-game/quiz-game.component";
import {ThemesListComponent} from "./themes/themes-list/themes-list.component";


const routes: Routes = [
  { path:'game', component:GamePageComponent},
  { path:'select-player', component:GameSelectPlayerComponent},
  { path:'select-player/:id', component:GameSelectPlayerComponent},
  { path:'select-player/:id/select-theme', component:ThemesListComponent},
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
  {path: "user-card/:id",component: UserCardComponent},
  {path: "user-config/:id", component: UserConfigComponent},

  {path: "config-pop-up/:id", component: ConfigPopUpComponent},
  {path:"password",component: PasswordComponent},
  {path: "password-quiz",component:PasswordQuizComponent},
  {path:"quiz-game",component: QuizGameComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
