import {Component, Input} from '@angular/core';
import {Quiz} from "../../../models/quiz.model";
import {Theme} from "../../../models/theme.models";


@Component({
  selector: 'app-theme-card',
  templateUrl: './theme-card.component.html',
  styleUrls: ['./theme-card.component.scss']
})
export class ThemeCardComponent {

  @Input() theme!:Theme;

}
