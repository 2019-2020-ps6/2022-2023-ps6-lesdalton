import {Component, ElementRef} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {ThemeService} from "../../../services/theme.service";
import {GameServiceService} from "../../../services/game-service.service";
import {Observable} from "rxjs";
import {Question} from "../../../models/question.model";
import { Component } from '@angular/core';
import {User} from "../../../models/user.models";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-game-question',
  templateUrl: './game-question.component.html',
  styleUrls: ['./game-question.component.scss']
})
export class GameQuestionComponent {
  numberOfQuestions: number=0; // Déclaration de numberOfQuestions$ comme un Observable
  currentQuestionIndex:number=0;
  currentQuestion: Question | undefined;
  playerScore:number=0;



  user: User = {id:'',firstName:'',lastName:'',config:{fontSize:16,lineHeight:5}};

  constructor(private gameService: GameServiceService) {
    this.gameService.numberOfQuestions$.subscribe((nbreQuestions:number) => {this.numberOfQuestions=nbreQuestions}); // Obtention de numberOfQuestions$ en tant qu'Observable
    this.gameService.currentQuestionIndex$.subscribe((indexQuestionEnCours:number) => {this.currentQuestionIndex=indexQuestionEnCours}); // Obtention de currentQuestionIndex$ en tant qu'Observable
    this.gameService.currentQuestion$.subscribe((QuestionEnCours:Question) => {this.currentQuestion=QuestionEnCours});
    this.gameService.playerScore$.subscribe((score) => this.playerScore=score)
  }

  ngOnInit() {
  }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.user = this.userService.getUserById(id);
  }
}
