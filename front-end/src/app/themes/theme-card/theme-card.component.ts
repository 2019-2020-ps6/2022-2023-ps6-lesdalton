import {Component, Input} from '@angular/core';
import {Quiz} from "../../../models/quiz.model";
import {Theme} from "../../../models/theme.models";
import {user} from "../../../models/user.models";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";


@Component({
  selector: 'app-theme-card',
  templateUrl: './theme-card.component.html',
  styleUrls: ['./theme-card.component.scss']
})
export class ThemeCardComponent {

  public user:user={firstName:'',lastName:'',id:'',config:{fontSize:16,lineHeight:10,letterSpacing:5}};
  @Input() theme!: Theme;
  constructor(private route:ActivatedRoute,private userService:UserService) {
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.user = this.userService.getUserById(id);
  }
}
