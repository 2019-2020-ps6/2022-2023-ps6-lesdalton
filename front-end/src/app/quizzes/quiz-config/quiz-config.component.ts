import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../../../services/quiz.service";
import {Quiz} from "../../../models/quiz.model";
import {ThemeService} from "../../../services/theme.service";
import {Theme} from "../../../models/theme.models";

@Component({
  selector: 'app-quiz-config',
  templateUrl: './quiz-config.component.html',
  styleUrls: ['quiz-config.component.scss']
})
export class QuizConfigComponent {

  quiz: Quiz = {id:'',name:'',theme:''};

  constructor(private route:ActivatedRoute,private quizService:QuizService) {
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.quiz = this.quizService.getQuizById(id);
  }
}
