import {Component, Input} from '@angular/core';
import {Quiz} from "../../../models/quiz.model";
import {Theme} from "../../../models/theme.models";
import {User} from "../../../models/user.models";
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../../services/users.service";


@Component({
  selector: 'app-theme-card',
  templateUrl: './theme-card.component.html',
  styleUrls: ['./theme-card.component.scss']
})
export class ThemeCardComponent {

  @Input() user!:User;
  @Input() theme!: Theme;
  constructor(private route:ActivatedRoute,private userService:UsersService) {
  }
  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id')!;
    this.user = this.userService.getUserById(id);
  }
}
