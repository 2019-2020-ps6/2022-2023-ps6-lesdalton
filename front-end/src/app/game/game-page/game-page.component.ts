import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../../services/users.service";
import {user} from "../../../models/user.models";
import {Quiz} from "../../../models/quiz.model";
import {ThemeService} from "../../../services/theme.service";
import {GameService} from "../../../services/game.service";
import {QuizService} from "../../../services/quiz.service";

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent {

  @Input() user!: user;

  @Input() quiz!: Quiz;


  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private themeService: ThemeService,
    private gameService:GameService,
    private quizService:QuizService,
    ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.quiz = this.quizService.getQuizById(params['quiz']);
      this.user = this.usersService.getUserByName(params['user']);
    });
    this.gameService.startGame(this.quiz);
  }

}
