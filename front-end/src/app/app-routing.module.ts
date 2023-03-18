import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {gamePageComponent} from "./gamePageComponent/gamePage";

const routes: Routes = [
  {path: 'game', component: gamePageComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
