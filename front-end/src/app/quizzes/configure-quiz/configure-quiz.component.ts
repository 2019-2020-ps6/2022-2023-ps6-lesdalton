import { Component } from '@angular/core';

@Component({
  selector: '[id=quizId]',
  templateUrl: './configure-quiz.component.html',
  styleUrls: ['./configure-quiz.component.scss']
})
export class ConfigureQuizComponent {
  constructor(quizId:string) {
  }
}
