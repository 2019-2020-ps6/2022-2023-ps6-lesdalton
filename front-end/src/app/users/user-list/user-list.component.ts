import {Component, OnInit, ViewChild} from '@angular/core';

import { User } from '../../../models/user.models';
import { UsersService } from '../../../services/users.service';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {serverUrl} from "../../../configs/server.config";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public userList: User[] = [];

  constructor(private userService: UsersService, private router: Router,private http: HttpClient) {
    this.userService.users$.subscribe((users) => (this.userList =users));
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
