import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {User} from "../../models/user.models";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../services/users.service";
import {Question} from "../../models/question.model";
import {Histoire_de_France_questions} from "../../mocks/question-list.mock";
import {PopupService} from "../../services/pop-up.service";
import {UserConfigModel} from "../../models/user-config.model";


@Component({
  selector: 'app-config-pop-up',
  templateUrl: './config-pop-up.component.html',
  styleUrls: ['./config-pop-up.component.scss']
})
export class ConfigPopUpComponent {



  @Input() user: User = {
    firstName: "",
    lastName: "",
    id: "",
    stats: {
      statsByTheme: []
    },
    config: {} as UserConfigModel // Assign an empty UserConfigModel object
  };

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
    this.router.navigate(['/user-config'], { queryParams: { user: this.user.id } });
  }
}
