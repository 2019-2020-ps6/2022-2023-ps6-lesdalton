import { Component } from '@angular/core';
import {Theme} from "../../../models/theme.models";
import {THEME_LIST} from "../../../mocks/theme.mocks";

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.scss']
})
export class ThemesListComponent {
  public themes:Theme[] = THEME_LIST;
}
