import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {User} from "../../../models/user.models";
import {USER} from "../../../mocks/user-list.mock";
import {Theme} from "../../../models/theme.models";
import {UsersService} from "../../../services/users.service";
import {ActivatedRoute} from "@angular/router";
import {PopupService} from "../../../services/pop-up.service";
import {ThemeService} from "../../../services/theme.service";

@Component({
  selector: 'app-game-select-theme',
  templateUrl: './game-select-theme.component.html',
  styleUrls: ['./game-select-theme.component.scss']
})
export class GameSelectThemeComponent {
  themeList:Theme[] = [];
  @Input() user!:User;



  constructor(private route: ActivatedRoute,
              private userService: UsersService,
              private themeService:ThemeService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.user = this.userService.getUserByName(params['name']);
      this.themeService.themes$.subscribe((themes) => (this.themeList =themes));
    });
  }
}
