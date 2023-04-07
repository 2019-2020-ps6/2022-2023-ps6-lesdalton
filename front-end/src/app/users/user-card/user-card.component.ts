import {Component, Input} from '@angular/core';
import {user} from "../../../models/user.models";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user: user = {id:'',firstName:'',lastName:'',config:{fontSize:16,lineHeight:5,letterSpacing:5}};

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {

  }

  onSave(){
    this.userService.updateUser(this.user);
  }
}
