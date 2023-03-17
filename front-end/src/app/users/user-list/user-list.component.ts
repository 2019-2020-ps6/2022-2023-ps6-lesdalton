import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.models';
import { UserService } from 'src/services/user.service';
import { USER } from 'src/mocks/user-list.mock';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = USER;

  constructor() {}

  ngOnInit() {}
}
