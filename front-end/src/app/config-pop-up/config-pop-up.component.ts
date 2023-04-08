import {Component, ElementRef} from '@angular/core';
import {user} from "../../models/user.models";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {PopupService} from "../../services/pop-up.service";
import {Question} from "../../models/question.model";
import {QUESTION_LIST} from "../../mocks/question-list.mock";
import {Answer} from "../../models/answer.models";

@Component({
  selector: 'app-config-pop-up',
  templateUrl: './config-pop-up.component.html',
  styleUrls: ['./config-pop-up.component.scss']
})
export class ConfigPopUpComponent {
  user!: user;
  min:number=16;
  max:number=35;

  question:string=QUESTION_LIST[0].text;
  answers:Answer[]=QUESTION_LIST[0].answers;

  constructor(private route: ActivatedRoute, private userService: UserService,private elementRef:ElementRef,private popupService:PopupService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.user = this.userService.getUserByName(params['name']);
    });
    this.popupService.getIsOpen().subscribe(isOpen => {
      this.isPopupOpen = isOpen; // mettre à jour l'état de l'ouverture du pop-up
    });
  }

  value = 0;
  updateValue() {
    if (this.value < 16) {
      this.value = 16;
    } else if (this.value > 35) {
      this.value = 35;
    }
  }

  changeFontSize() {
    const textElements: NodeListOf<HTMLElement> = this.elementRef.nativeElement.querySelectorAll('.resize');
    textElements.forEach((element: HTMLElement) => {
      const newValue =  30*(this.value/100+1);
      console.log(newValue);
      element.style.fontSize = newValue + 'px';
    });
    const button:HTMLElement = this.elementRef.nativeElement.querySelectorAll('.button-card');
    const newValue =  30*(this.value/100+1);
    console.log(newValue);
    button.style.fontSize = newValue + 'px';
  }

  isPopupOpen = false;

  onValider() {
    this.popupService.closePopup(); // fermer le pop-up
  }

  onPopClick() {
    this.popupService.openPopup(); // ouvrir le pop-up
  }

}
