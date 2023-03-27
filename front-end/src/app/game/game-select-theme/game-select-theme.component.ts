import {Component, OnInit} from '@angular/core';
import {ThemeMocks} from "../../../mocks/theme.mocks";
import {User} from "../../../models/user.models";
import {USER} from "../../../mocks/user-list.mock";
import {Theme} from "../../../models/theme.models";

@Component({
  selector: 'app-game-select-theme',
  templateUrl: './game-select-theme.component.html',
  styleUrls: ['./game-select-theme.component.scss']
})
export class GameSelectThemeComponent implements OnInit{
  themeList:Theme[] = ThemeMocks;

  ngOnInit(): void {
  }

}