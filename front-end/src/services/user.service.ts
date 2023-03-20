import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import { User } from '../models/user.models';
import { serverUrl, httpOptionsBase } from '../configs/server.config';
import { USER } from 'src/mocks/user-list.mock';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /*
   The list of users.
   */
  private users: User[] = USER;

  /*
   Observable which contains the list of users.
   */
  public users$: BehaviorSubject<User[]> = new BehaviorSubject(USER);

  constructor(private http: HttpClient, private router: Router) { }

  /*
   Adds a new user to the list of users.
   */
  addUser(user: User): void {
    this.users.push(user);
    this.users$.next(this.users);
  }

  /*
   Deletes the specified user from the list of users.
   */
  deleteUser(user: User): void {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
      this.users$.next(this.users);
    }
  }

  /*
   Returns the list of users.
   */
  getUsers(): User[] {
    return this.users;
  }


  /*
   Updates the specified user with the provided data.
   */
  updateUser(user: User): void {
    const index = this.users.findIndex(u => u.id === user.id);
    console.log("User edited : ",this.users[index]);
    if (index !== -1) {
      this.users[index] = user;
      this.users$.next(this.users);
    }
  }

  getUserById(id: string): User {
    const user = this.users.find(u => u.id === id)!;
    return user;
  }
}
