import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {User} from "../../../models/user.models";
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../../services/users.service";


@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.component.html',
  styleUrls: ['./user-config.component.scss']
})
export class UserConfigComponent {

  user!: User;
  minFontSize=25;
  maxFontSize=40;

  constructor(private route: ActivatedRoute,private userService:UsersService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.user = this.userService.getUserByName(params['user']);
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

  onSaveConfig(){
    this.userService.updateUser(this.user);
  }
}
