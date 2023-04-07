import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { user } from '../../../models/user.models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  @Input()
  user: user | undefined;


  @Output()
  deleteUser: EventEmitter<user> = new EventEmitter<user>();


  constructor() {
  }

  ngOnInit(): void {
  }

  delete() {
    this.deleteUser.emit(this.user);
  }

}
