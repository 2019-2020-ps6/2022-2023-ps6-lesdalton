import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../../../services/quiz.service";
import {Quiz} from "../../../models/quiz.model";
import {ThemeService} from "../../../services/theme.service";
import {Theme} from "../../../models/theme.models";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {QUIZ_LIST} from "../../../mocks/quizzes-list.mock";
import {Question} from "../../../models/question.model";
import {QUESTION_LIST} from "../../../mocks/question-list.mock";
import {Answer} from "../../../models/answer.models";



@Component({
  selector: 'app-quiz-config',
  templateUrl: './quiz-config.component.html',
  styleUrls: ['quiz-config.component.scss']
})
export class QuizConfigComponent {

  quiz: Quiz = {id:'',name:'',theme:{name:"Sans Thème"},question:[]};
  question: Question={id:1,text:'',answers:[]};
  public themeList:Theme[] = this.themeService.themes;
  answer: Answer={id:this.question.answers.length+1,text:'',isCorrect:false,questionId:this.question.id};



  quizForm = new FormGroup({
    name: new FormControl(),
    theme: new FormControl(),
    id: new FormControl()
  });

  questionForm = this.formBuilder.group({
    id: this.quiz.question.length + 1,
    quizId: this.quiz.id,
    text: new FormControl(),
  });


  constructor(public formBuilder: FormBuilder,private route:ActivatedRoute,private quizService:QuizService, private themeService: ThemeService) {

  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.quiz = this.quizService.getQuizById(id);

    // écouter les changements de la liste de questions
    this.quizService.questionsChanged.subscribe(() => {
      this.questionForm = this.formBuilder.group({
        id: this.quiz.question.length + 1,
        quizId: this.quiz.id,
        text: new FormControl(),
      });
    });
  }

  addQuestion(){
    const questionToAdd: Question=this.questionForm.getRawValue() as Question;
    console.log('question added : ',questionToAdd);
    this.quizService.addQuestion(questionToAdd);

  }
}
