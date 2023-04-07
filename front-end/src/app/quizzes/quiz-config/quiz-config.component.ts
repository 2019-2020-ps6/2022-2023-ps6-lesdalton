import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../../../services/quiz.service";
import {Quiz} from "../../../models/quiz.model";
import {ThemeService} from "../../../services/theme.service";
import {Theme} from "../../../models/theme.models";
import {FormControl, FormGroup} from "@angular/forms";
import {QUIZ_LIST} from "../../../mocks/quizzes-list.mock";
import {Question} from "../../../models/question.model";
import {QUESTION_LIST} from "../../../mocks/question-list.mock";

@Component({
  selector: 'app-quiz-config',
  templateUrl: './quiz-config.component.html',
  styleUrls: ['quiz-config.component.scss']
})
export class QuizConfigComponent {

  quiz: Quiz = {id:'',name:'',theme:{name:"Sans Thème"},question:[]};
  public themeList:Theme[] = this.themeService.themes;
  public quizzes: Quiz[] = QUIZ_LIST;

  public questions: Question[]= QUESTION_LIST;

  quizForm = new FormGroup({
    name: new FormControl(),
    theme: new FormControl(),
    id: new FormControl()
  });

  constructor(private route:ActivatedRoute,private quizService:QuizService, private themeService: ThemeService) {
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.quiz = this.quizService.getQuizById(id);
  }
}
