import {Component, ElementRef, OnInit} from '@angular/core';
import {ThemeMocks} from "../../../mocks/theme.mocks";
import {User} from "../../../models/user.models";
import {USER} from "../../../mocks/user-list.mock";
import {Theme} from "../../../models/theme.models";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-game-select-theme',
  templateUrl: './game-select-theme.component.html',
  styleUrls: ['./game-select-theme.component.scss']
})
export class GameSelectThemeComponent implements OnInit{
  themeList:Theme[] = ThemeMocks;

  user: User = {id:'',firstName:'',lastName:''};

  constructor(private route: ActivatedRoute, private userService: UserService,private elementRef:ElementRef) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.user = this.userService.getUserById(id);
  }

}
