import {Component,OnInit} from '@angular/core';
import  { Quiz } from '../../../models/quiz.model'

@Component({
  selector:'app-quiz',
  templateUrl:'quiz.component.html',
  styleUrls:['quiz.component.css']
})

export class QuizFormComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor() {
  }
}
