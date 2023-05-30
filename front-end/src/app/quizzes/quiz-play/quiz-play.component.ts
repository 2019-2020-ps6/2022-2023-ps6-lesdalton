import {Component, Input} from '@angular/core';
import {Quiz} from "../../../models/quiz.model";
import {Theme} from "../../../models/theme.models";
import {QuizService} from "../../../services/quiz.service";
import {ThemeService} from "../../../services/theme.service";
import {User} from "../../../models/user.models";
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../../services/users.service";

@Component({
  selector: 'app-quiz-play',
  templateUrl: './quiz-play.component.html',
  styleUrls: ['./quiz-play.component.scss']
})
export class QuizPlayComponent {
  @Input() quiz!: Quiz;
  public user:User={firstName:'',lastName:'',id:'',config:{fontSize:16,lineHeight:10,letterSpacing:5},stats: {statsByTheme: [{themeName: "Histoire", themePoints: 15},{themeName: "Cinéma",themePoints: 20}]}};
  @Input() theme!: String;
  constructor(private route:ActivatedRoute,private userService:UsersService) {
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.route.queryParams.subscribe(params => {
      this.userService.getUserById(id).subscribe(
        response => {
          // Handle the quiz data received in the response
          console.log(response);
          // Assign the quiz data to this.quiz
          this.user = response;
        },
        error => {
          // Handle any errors that occur during the HTTP request
          console.error(error);
        }
      );
    });
  }

}
