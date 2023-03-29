import { Component } from '@angular/core';
import {User} from "../../../models/user.models";
import {UserService} from "../../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-game-question',
  templateUrl: './game-question.component.html',
  styleUrls: ['./game-question.component.scss']
})
export class GameQuestionComponent {
  user: User = {id:'',firstName:'',lastName:'',config:{fontSize:16}};

  constructor(private userService: UserService,private route:ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.user = this.userService.getUserById(id);
  }
}
