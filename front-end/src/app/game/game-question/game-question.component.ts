import {Component, ElementRef} from '@angular/core';
import {GameServiceService} from "../../../services/game-service.service";
import {Question} from "../../../models/question.model";
import {User} from "../../../models/user.models";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {PopupService} from "../../../services/pop-up.service";

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

  constructor(private gameService: GameServiceService,private route:ActivatedRoute,private userService:UserService,private popupService: PopupService) {
    this.gameService.numberOfQuestions$.subscribe((nbreQuestions:number) => {this.numberOfQuestions=nbreQuestions}); // Obtention de numberOfQuestions$ en tant qu'Observable
    this.gameService.currentQuestionIndex$.subscribe((indexQuestionEnCours:number) => {this.currentQuestionIndex=indexQuestionEnCours}); // Obtention de currentQuestionIndex$ en tant qu'Observable
    this.gameService.currentQuestion$.subscribe((QuestionEnCours:Question) => {this.currentQuestion=QuestionEnCours});
    this.gameService.playerScore$.subscribe((score) => this.playerScore=score)
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.user = this.userService.getUserById(id);
    this.ngOnInit2();
  }

  onQuestionClick() {
    // Increment the current question index
    this.gameService.setCurrentQuestionIndex(this.currentQuestionIndex + 1);
  }

  isPopupOpen = false;


  ngOnInit2(): void {
    this.popupService.getIsOpen().subscribe(isOpen => {
      this.isPopupOpen = isOpen; // mettre à jour l'état de l'ouverture du pop-up
    });
  }

  onValider() {
    this.popupService.closePopup(); // fermer le pop-up
  }

  onPopClick() {
    this.popupService.openPopup(); // ouvrir le pop-up
  }



}
