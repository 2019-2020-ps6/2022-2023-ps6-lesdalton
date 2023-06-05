import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../../../services/quiz.service";
import {Quiz} from "../../../models/quiz.model";
import {ThemeService} from "../../../services/theme.service";
import {Theme} from "../../../models/theme.models";
import {FormBuilder, FormControl, FormGroup, Validators, ɵElement} from "@angular/forms";
import {Question} from "../../../models/question.model";
import {Answer} from "../../../models/answer.models";



@Component({
  selector: 'app-quiz-config',
  templateUrl: './quiz-config.component.html',
  styleUrls: ['quiz-config.component.scss']
})
export class QuizConfigComponent {

  quiz: Quiz = {id:'',name:'',theme:{name:"Sans Thème"},questions:[]}!;
  question: Question={id:1,text:'',answers:[{id:1,text:'',isCorrect:false,questionId:1}]};
  public themeList:Theme[] = this.themeService.themes;
  answer: Answer={id:this.question.answers.length+1,text:'',isCorrect:false,questionId:this.question.id};



  quizForm = new FormGroup({
    name: new FormControl(),
    theme: new FormControl(),
    id: new FormControl()
  });

  questionForm: FormGroup;


  constructor(public formBuilder: FormBuilder,private route:ActivatedRoute,private quizService:QuizService, private themeService: ThemeService) {
    this.questionForm = this.formBuilder.group({
      text:['', Validators.required],
      answers : this.formBuilder.array([]),
    });

  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.quizService.getQuizById(id).subscribe(
      response => {
        // Handle the quiz data received in the response
        console.log(response);
        // Assign the quiz data to this.quiz
        this.quiz = response;
      },
      error => {
        // Handle any errors that occur during the HTTP request
        console.error(error);
      }
    );

  }

  onSave() {
    this.quizService.updateQuiz(this.quiz);
  }

  addQuestion(){
    const index=Date.now();
    const text = this.questionForm.getRawValue().text
    const questionToAdd: Question={id:index,text:text,answers:[{id:1 ,text:text,isCorrect:false,questionId:index}]};
    console.log('question added : ',questionToAdd)
    this.quizService.addQuestion(this.quiz,questionToAdd);
    this.quizService.questionsChanged.next(true);
  }

}
