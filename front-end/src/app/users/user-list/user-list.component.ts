import {Component, OnInit, ViewChild} from '@angular/core';

import { user } from '../../../models/user.models';
import { UsersService } from '../../../services/users.service';
import {Router} from "@angular/router";
import {USER} from "../../../mocks/user-list.mock";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {



  public userList: user[] = USER;


  constructor(private userService: UsersService, private router: Router) {
    this.userService.users$.subscribe((users: user[]) => {
      this.userList = users;
    });
  }

  ngOnInit(): void {
  }

  deleteUser(user: user): void {
    console.log('User deleted : ',user);
    this.userService.deleteUser(user);
  }

  updateUser(user: user){
    this.userService.updateUser(user)
  }



}
