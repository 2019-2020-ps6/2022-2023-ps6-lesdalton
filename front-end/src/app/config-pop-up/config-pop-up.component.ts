import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {User} from "../../models/user.models";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../services/users.service";
import {Question} from "../../models/question.model";
import {Histoire_de_France_questions} from "../../mocks/question-list.mock";
import {PopupService} from "../../services/pop-up.service";


@Component({
  selector: 'app-config-pop-up',
  templateUrl: './config-pop-up.component.html',
  styleUrls: ['./config-pop-up.component.scss']
})
export class ConfigPopUpComponent {

  user!: User;
  minFontSize=25;
  maxFontSize=40;
  currentQuestion:Question = Histoire_de_France_questions[0];
  isPopUpOpen!: boolean;
  isAdjustButtonVisible!: boolean;

  constructor(private route: ActivatedRoute,
              private userService:UsersService,
              private popUpService:PopupService,
              private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.user = this.userService.getUserByName(params['user']);
    });
    this.popUpService.isOpen.subscribe((isOpen: boolean) => {
      this.isPopUpOpen = isOpen;
    });

    this.popUpService.isAdjustButtonVisible.subscribe((isOpen: boolean) => {
      this.isAdjustButtonVisible = isOpen;
    });
  }
  updateValue() {
    console.log("FontSize : ", this.user.config.fontSize, "lineHeight : " ,this.user.config.lineHeight, "letterSpacing : ",this.user.config.letterSpacing);

    if (this.user.config.fontSize < this.minFontSize) {
      this.user.config.fontSize = this.minFontSize;
    } else if (this.user.config.fontSize > this.maxFontSize) {
      this.user.config.fontSize = this.maxFontSize;
    }

    if (this.user.config.lineHeight< 0) {
      this.user.config.lineHeight = 0;
    } else if (this.user.config.lineHeight > 100) {
      this.user.config.lineHeight = 100;
    }

    if(this.user.config.letterSpacing<0){
      this.user.config.letterSpacing=0;
    } else if(this.user.config.letterSpacing>100){
      this.user.config.letterSpacing=100;
    }
  }

  onPopClick() {
    if (!this.isPopUpOpen) {
      this.popUpService.openPopup();
      this.popUpService.closeAdjustButton();
    }

    else {
      this.popUpService.closePopup();
      this.popUpService.openAdjustButton();
    }
  }

  onValider() {
    this.popUpService.closePopup(); // close the popup
    this.router.navigate(['/user-config'], { queryParams: { user: this.user.firstName } });
  }
}
