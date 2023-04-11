import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../../../services/quiz.service";
import {ThemeService} from "../../../services/theme.service";
import {Quiz} from "../../../models/quiz.model";
import {Question} from "../../../models/question.model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Answer} from "../../../models/answer.models";

@Component({
  selector: 'app-quiz-config-question',
  templateUrl: './quiz-config-question.component.html',
  styleUrls: ['./quiz-config-question.component.scss']
})
export class QuizConfigQuestionComponent {

  quiz: Quiz = {id:'',name:'',theme:{name:"Sans Thème"},questions:[]};
  question: Question={id:1,text:'',answers:[]};



  answerForm = this.formBuilder.group({
    id: new FormControl(),
    questionId:this.question.id,
    text: new FormControl(),
    isCorrect: false
  });



  constructor(public formBuilder: FormBuilder,private route:ActivatedRoute,private quizService:QuizService, private themeService: ThemeService) {}


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.quiz = this.quizService.getQuizById(id);

    const id_question=parseInt(<string>this.route.snapshot.paramMap.get('question-id'));
    this.question=this.quizService.getQuestionById(id_question)


  /*  this.quizService.answersChanged.subscribe(() => {
      this.answerForm = this.formBuilder.group({
        id: new FormControl(),
        questionId: this.question.id,
        text: new FormControl(),
        isCorrect: new FormControl<boolean>(false)
      });
    });*/
  }

  addAnswer() {
    const answerToAdd: Answer = this.answerForm.getRawValue() as Answer;
    const newAnswer: Answer = {
      id: this.question.answers.length + 1,
      text: answerToAdd.text,
      isCorrect: answerToAdd.isCorrect,
      questionId: this.question.id
    };
    console.log('answer added : ', newAnswer);
    this.quizService.addAnswer(newAnswer);
  }


  deleteAnswer(answer: Answer){
    console.log('answer deleted : ',answer);
    this.quizService.deleteAnswer(answer);
  }

  deleteQuestion(question: Question){
    console.log('question deleted : ',question);
    this.quizService.deleteQuestion(question);
  }
}
