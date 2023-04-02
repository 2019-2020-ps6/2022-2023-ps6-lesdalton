import {Component, Input} from '@angular/core';
import {Quiz} from "../../../models/quiz.model";
import {Theme} from "../../../models/theme.models";
import {QuizService} from "../../../services/quiz.service";
import {ThemeService} from "../../../services/theme.service";
import {User} from "../../../models/user.models";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-quiz-play',
  templateUrl: './quiz-play.component.html',
  styleUrls: ['./quiz-play.component.scss']
})
export class QuizPlayComponent {
  @Input() quiz!: Quiz;
  public user:User={firstName:'',lastName:'',id:'',config:{fontSize:16,lineHeight:10}};
  @Input() theme!: String;
  constructor(private route:ActivatedRoute,private userService:UserService) {
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.user = this.userService.getUserById(id);
  }

}
