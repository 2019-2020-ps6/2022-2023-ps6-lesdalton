import {Component, OnInit, ViewChild} from '@angular/core';

import { User } from '../../../models/user.models';
import { UserService } from '../../../services/user.service';
import {Router} from "@angular/router";
import {USER} from "../../../mocks/user-list.mock";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {



  public userList: User[] = USER;


  constructor(private userService: UserService, private router: Router) {
    this.userService.users$.subscribe((users: User[]) => {
      this.userList = users;
    });
  }

  ngOnInit(): void {
  }

  deleteUser(user: User): void {
    console.log('User deleted : ',user);
    this.userService.deleteUser(user);
  }

  updateUser(user: User){
    this.userService.updateUser(user)
  }



}
