import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { QuizService } from "../../../services/quiz.service";
import { ThemeService } from "../../../services/theme.service";
import { Quiz } from "../../../models/quiz.model";
import { Question } from "../../../models/question.model";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Answer} from "../../../models/answer.models";

@Component({
  selector: 'app-quiz-config-question',
  templateUrl: './quiz-config-question.component.html',
  styleUrls: ['./quiz-config-question.component.scss']
})
export class QuizConfigQuestionComponent implements OnInit {

  quiz: Quiz = {id: '0', name: '', theme: {name: "Sans Thème"}, questions: []};
  question: Question = {id: 1, text: '', answers: []};
  answerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private quizService: QuizService,
    private themeService: ThemeService
  ) {
    this.answerForm = this.formBuilder.group({
      questionId: this.question.id,
      text: '',
      answer: this.question.answers,
      isCorrect: false
    });

    if (this.question.answers.length === 0) {
      this.question.answers.push({ id: 1, text: '', isCorrect: false ,questionId:this.question.id});
    }
  }



  ngOnInit(): void {
    const quizId = this.route.snapshot.paramMap.get('id')!;
    const questionId = this.route.snapshot.paramMap.get('question-id')

    this.route.queryParams.subscribe(() => {
      this.quizService.getQuizById(quizId).subscribe(
        response => {
          // Handle the user data received in the response
          console.log(response);
          // Assign the user data to this.user
          this.quiz = response;
        },
        error => {
          // Handle any errors that occur during the HTTP request
          console.error(error);
        }
      );
    });

    this.quizService.answersChanged.subscribe(() => {
      this.answerForm = this.formBuilder.group({
        questionId: this.question.id,
        text: '',
        answer: this.question.answers,
        isCorrect: false
      });
    });

  }

  addAnswer() {
    const answerToAdd: Answer = this.answerForm.getRawValue() as Answer;
    console.log('answer added : ', answerToAdd);
    this.quizService.addAnswer(this.quiz,answerToAdd);
    this.quizService.answersChanged.next(true);
  }

  deleteAnswer(answer: Answer) {
    console.log('answer deleted : ', answer);
    this.quizService.deleteAnswer(answer);
  }

  deleteQuestion(question: Question) {
    console.log('question deleted : ', question);
    this.quizService.deleteQuestion(question);
    this.quizService.questionsChanged.next(true);
  }
}
