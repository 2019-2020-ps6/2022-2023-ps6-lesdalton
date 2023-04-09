import {Component, ElementRef, Input} from '@angular/core';
import {GameServiceService} from "../../../services/game-service.service";
import {Question} from "../../../models/question.model";
import {user} from "../../../models/user.models";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {PopupService} from "../../../services/pop-up.service";
import {Quiz} from "../../../models/quiz.model";
import {QuizService} from "../../../services/quiz.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-game-question',
  templateUrl: './game-question.component.html',
  styleUrls: ['./game-question.component.scss']
})
export class GameQuestionComponent {
  numberOfQuestions$!: Observable<number>; // Déclaration de numberOfQuestions$ comme un Observable
  currentQuestionIndex:number=0;
  currentQuestion: Question | undefined;
  playerScore:number=0;

  @Input() quiz!:Quiz;



  @Input() user!: user;

  constructor(public gameService: GameServiceService,private route:ActivatedRoute,private userService:UserService
              ,private popupService: PopupService,
              private quizService:QuizService) {
    this.route.queryParams.subscribe(params => {
      this.quiz = this.quizService.getQuizByName(params['quiz']);
    });
    this.numberOfQuestions$=this.quizService.getNumberOfQuestions(this.quiz); // Obtention de numberOfQuestions$ en tant qu'Observable
    this.gameService.currentQuestionIndex$.subscribe((indexQuestionEnCours:number) => {this.currentQuestionIndex=indexQuestionEnCours}); // Obtention de currentQuestionIndex$ en tant qu'Observable
    this.gameService.currentQuestion$.subscribe((QuestionEnCours:Question) => {this.currentQuestion=QuestionEnCours});
    this.gameService.playerScore$.subscribe((score) => this.playerScore=score)
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.user = this.userService.getUserByName(params['user']);
    });
    this.popupService.getIsOpen().subscribe(isOpen => {
      this.isPopupOpen = isOpen; // mettre à jour l'état de l'ouverture du pop-up
    });
  }

  onQuestionClick() {
    // Increment the current question index
    this.gameService.setCurrentQuestionIndex(this.currentQuestionIndex + 1);
  }

  isPopupOpen = false;

  onValider() {
    this.popupService.closePopup(); // fermer le pop-up
  }

  onPopClick() {
    this.popupService.openPopup(); // ouvrir le pop-up
  }



}
