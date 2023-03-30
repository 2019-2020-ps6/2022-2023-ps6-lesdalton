import { Component } from '@angular/core';
import {User} from "../../../models/user.models";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {Theme} from "../../../models/theme.models";
import {config} from "rxjs";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  user: User = {id:'',firstName:'',lastName:'',config:{fontSize:16,lineHeight:5}};

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.user = this.userService.getUserById(id);
  }

  onSave(){
    this.userService.updateUser(this.user);
  }
}
