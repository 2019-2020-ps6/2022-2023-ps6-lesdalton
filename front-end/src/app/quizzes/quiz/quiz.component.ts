import {Component,OnInit} from '@angular/core';
import  { Quiz } from '../../../models/quiz.model'

@Component({
  selector:'app-quiz',
  templateUrl:'quiz.component.html',
  styleUrls:['quiz.component.scss']
})

export class QuizComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
