import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../../../models/user.models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  @Input()
  user: User | undefined;


  @Output()
  deleteUser: EventEmitter<User> = new EventEmitter<User>();


  constructor() {
  }

  ngOnInit(): void {
  }

  delete() {
    this.deleteUser.emit(this.user);
  }

}
