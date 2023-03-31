import {Component, Input} from '@angular/core';
import {Quiz} from "../../../models/quiz.model";
import {Theme} from "../../../models/theme.models";
import {User} from "../../../models/user.models";


@Component({
  selector: 'app-theme-card',
  templateUrl: './theme-card.component.html',
  styleUrls: ['./theme-card.component.scss']
})
export class ThemeCardComponent {

  public user:User={firstName:'',lastName:'',id:'0',config:{fontSize:16,lineHeight:10}};
  @Input() theme!: Theme;
  ngOnInit(){

  }
}
