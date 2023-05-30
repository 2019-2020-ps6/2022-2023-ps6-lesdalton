import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Question } from '../../../models/question.model';
import { Quiz } from '../../../models/quiz.model';
import {PopupService} from "../../../services/pop-up.service";
import {QuizService} from "../../../services/quiz.service";
import {User} from "../../../models/user.models";
import {GameService} from "../../../services/game.service";
import {UsersService} from "../../../services/users.service";
import {Answer} from "../../../models/answer.models";
import {UserConfigModel} from "../../../models/user-config.model";

@Component({
  selector: 'app-game-question',
  templateUrl: './game-question.component.html',
  styleUrls: ['./game-question.component.scss']
})
export class GameQuestionComponent implements OnInit {
  @Input() quizName!: string;
  @Input() username!: string;

  currentQuestionIndex: number = 0;
  currentQuestion!: Question;
  playerScore: number = 0;
  numberOfQuestions$!: Observable<number>; // Declare numberOfQuestions$ as an Observable
  numberOfQuestions!:number;

  isPopupOpen = false;
  isAdjustButtonVisible = true;

  @Input() quiz!:Quiz;
  user: User = {
    firstName: "",
    lastName: "",
    id: "",
    stats: {
      statsByTheme: []
    },
    config: {} as UserConfigModel // Assign an empty UserConfigModel object
  };


  constructor(
    public gameService: GameService,
    private route: ActivatedRoute,
    private userService: UsersService,
    private popupService: PopupService,
    private quizService: QuizService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.queryParamMap.get('user')!;

    this.route.queryParams.subscribe(() => {
      this.userService.getUserById(id).subscribe(
        response => {
          // Handle the user data received in the response
          // Assign the user data to this.user
          this.user = response;
          console.log(this.user);
        },
        error => {
          // Handle any errors that occur during the HTTP request
          console.error(error);
        }
      );
    });
    this.route.queryParams.subscribe(params => {
      this.quizService.getQuizById(params['quiz']).subscribe(
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
    });


    // Get numberOfQuestions$ as an Observable
    this.numberOfQuestions$ = this.quizService.getNumberOfQuestions(this.quiz);
    this.numberOfQuestions$.subscribe(
      (numberOfQuestions) => this.numberOfQuestions = numberOfQuestions
    );

    // Get currentQuestionIndex$ as an Observable
    this.gameService.currentQuestionIndex$.subscribe((index: number) => {
      this.currentQuestionIndex = index;
    });

    // Get currentQuestion$ as an Observable
    this.gameService.currentQuestion$.subscribe((question: Question) => {
      this.currentQuestion = question;
    });

    // Get playerScore$ as an Observable
    this.gameService.playerScore$.subscribe((score: number) => {
      this.playerScore = score;
    });

    // Get isOpen$ as an Observable
    this.popupService.isOpen.subscribe((isOpen: boolean) => {
      this.isPopupOpen = isOpen;
    });

    this.popupService.isAdjustButtonVisible.subscribe((isOpen: boolean) => {
      this.isAdjustButtonVisible = isOpen;
    });
  }

  onQuestionClick() {
    // Increment the current question index
    this.gameService.setCurrentQuestionIndex(this.currentQuestionIndex + 1);
  }

  onValider() {
    this.popupService.closePopup(); // close the popup
  }



  onPopClick() {
    if (!this.isPopupOpen) {
      this.popupService.openPopup();
      this.popupService.closeAdjustButton();
    }

    else {
      this.popupService.closePopup();
      this.popupService.openAdjustButton();
    }
  }

  public onClickAnswer(answer:Answer){
    for (let answer of this.currentQuestion.answers) {
      if (answer.isCorrect) {
        answer.buttonColor = 'green';
      }
    }
    this.gameService.checkAnswer(answer);
    //this.currentQuestion = this.quiz.questions[this.currentQuestionIndex+1];
  }
}
