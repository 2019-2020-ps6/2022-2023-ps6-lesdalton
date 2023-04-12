import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'PolyQuiz';

  public HomePagePic: string='./assets/resources/homePagePic.png';



  constructor(public router: Router) {

  }

}
