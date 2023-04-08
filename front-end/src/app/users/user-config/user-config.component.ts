import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {user} from "../../../models/user.models";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {HorizontalGaugeComponent} from "../../horizontal-gauge/horizontal-gauge.component";
import {style} from "@angular/animations";

@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.component.html',
  styleUrls: ['./user-config.component.scss']
})
export class UserConfigComponent {

  user!: user;

  constructor(private route: ActivatedRoute,private userService:UserService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.user = this.userService.getUserByName(params['name']);
    });
  }
  updateValue() {
    console.log("FontSize : ", this.user.config.fontSize, "lineHeight : " ,this.user.config.lineHeight, "lettterSpacing : ",this.user.config.letterSpacing);

    if (this.user.config.fontSize < 20) {
      this.user.config.fontSize = 20;
    } else if (this.user.config.fontSize > 45) {
      this.user.config.fontSize = 45;
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

  changeFontSize() {

  }

  changeLineHeight(){

  }

  changeLetterSpacing(){

  }

  onSaveConfig(){
    this.userService.updateUser(this.user);
  }
}
