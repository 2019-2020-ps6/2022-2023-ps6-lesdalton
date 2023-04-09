import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {THEME_LIST} from "../../../mocks/theme.mocks";
import {user} from "../../../models/user.models";
import {USER} from "../../../mocks/user-list.mock";
import {Theme} from "../../../models/theme.models";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {PopupService} from "../../../services/pop-up.service";

@Component({
  selector: 'app-game-select-theme',
  templateUrl: './game-select-theme.component.html',
  styleUrls: ['./game-select-theme.component.scss']
})
export class GameSelectThemeComponent {
  themeList:Theme[] = THEME_LIST;
  @Input() user!:user;



  constructor(private route: ActivatedRoute, private userService: UserService,private elementRef:ElementRef,private popupService: PopupService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.user = this.userService.getUserByName(params['name']);
    });
  }



}
