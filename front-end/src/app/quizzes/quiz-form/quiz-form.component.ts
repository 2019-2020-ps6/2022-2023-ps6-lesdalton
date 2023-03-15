import {Component,OnInit} from '@angular/core';
import  { Quiz } from '../../../models/quiz.model'

@Component({
  selector:'app-quiz-form',
  templateUrl:'quiz-form.component.html',
  styleUrls:['quiz-form.component.css']
})

export class QuizFormComponent implements OnInit{
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    constructor() {
    }
}
