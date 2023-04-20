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

  quiz: Quiz = {id: '', name: '', theme: {name: "Sans Thème"}, questions: []};
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
    const id = this.route.snapshot.paramMap.get('id')!;
    this.quiz = this.quizService.getQuizById(id);

    const questionIdParam = this.route.snapshot.paramMap.get('question-id');
    const id_question = questionIdParam ? parseInt(questionIdParam, 10) : undefined;
    if (id_question) {
      this.question = this.quizService.getQuestionById(id_question);
    }



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
    this.quizService.addAnswer(answerToAdd);
    this.quizService.answersChanged.next(true);
  }

  deleteAnswer(answer: Answer) {
    console.log('answer deleted : ', answer);
    this.quizService.deleteAnswer(answer);
  }

  deleteQuestion(question: Question) {
    console.log('question deleted : ', question);
    this.quizService.deleteQuestion(question);
  }
}
