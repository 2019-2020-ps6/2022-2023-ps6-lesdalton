import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../../services/users.service";
import {User} from "../../../models/user.models";
import {Quiz} from "../../../models/quiz.model";
import {ThemeService} from "../../../services/theme.service";
import {GameService} from "../../../services/game.service";
import {QuizService} from "../../../services/quiz.service";
import {Answer} from "../../../models/answer.models";

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent {

  @Input() user!: User;

  @Input() quiz!: Quiz;


  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private themeService: ThemeService,
    private gameService:GameService,
    private quizService:QuizService,
    private router:Router
    ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.quiz = this.quizService.getQuizById(params['quiz']);
      this.user = this.usersService.getUserByName(params['user']);
    });
    this.gameService.startGame(this.quiz);
    this.gameService.gameFinished.subscribe((result) => {
      console.log(`Game over! Score: ${result.score}, Quiz ID: ${result.quizId}`);
      this.gameService.startGame(this.quiz);
      this.route.queryParams.subscribe(() => {
        this.router.navigate(['/result'], { queryParams: { player: this.user.firstName, quiz: result.quizId } });
      });
    });
  }


}
