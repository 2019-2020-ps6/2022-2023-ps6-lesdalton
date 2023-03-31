import {Component, Input} from '@angular/core';
import {Quiz} from "../../../models/quiz.model";
import {Theme} from "../../../models/theme.models";
import {QuizService} from "../../../services/quiz.service";
import {ThemeService} from "../../../services/theme.service";
import {User} from "../../../models/user.models";

@Component({
  selector: 'app-quiz-play',
  templateUrl: './quiz-play.component.html',
  styleUrls: ['./quiz-play.component.scss']
})
export class QuizPlayComponent {
  @Input() quiz!: Quiz;
  public user:User={firstName:'',lastName:'',id:'0',config:{fontSize:16,lineHeight:10}};
  @Input() theme!: Theme;
  ngOnInit(){

  }

}
