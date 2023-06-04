import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {User} from "../../../models/user.models";
import {Theme} from "../../../models/theme.models";
import {UsersService} from "../../../services/users.service";
import {ActivatedRoute} from "@angular/router";
import {PopupService} from "../../../services/pop-up.service";
import {ThemeService} from "../../../services/theme.service";
import {UserConfigModel} from "../../../models/user-config.model";

@Component({
  selector: 'app-game-select-theme',
  templateUrl: './game-select-theme.component.html',
  styleUrls: ['./game-select-theme.component.scss']
})
export class GameSelectThemeComponent {
  themeList:Theme[] = [];
  @Input() user: User = {
    firstName: "",
    lastName: "",
    id: "",
    stats: {
      statsByTheme: []
    },
    config: {} as UserConfigModel // Assign an empty UserConfigModel object
  };



  constructor(private route: ActivatedRoute,
              private userService: UsersService,
              private themeService:ThemeService) {}

  ngOnInit() {
    const id = this.route.snapshot.queryParamMap.get('user')!;

    this.route.queryParams.subscribe(() => {
      this.userService.getUserById(id).subscribe(
        response => {
          // Handle the user data received in the response
          console.log(response);
          // Assign the user data to this.user
          this.user = response;
        },
        error => {
          // Handle any errors that occur during the HTTP request
          console.error(error);
        }
      );
    });

    this.themeService.themes$.subscribe((themes) => {
      this.themeList = themes;
    });
  }

}
