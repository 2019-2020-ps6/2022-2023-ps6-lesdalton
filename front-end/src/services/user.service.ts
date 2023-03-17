import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../models/user.models';
import { serverUrl, httpOptionsBase } from '../configs/server.config';
import { USER } from 'src/mocks/user-list.mock';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /*
   The list of user.
   */
  private users: User[] = [];

  /*
   Observable which contains the list of the user.
   */
  public users$: BehaviorSubject<User[]>= new BehaviorSubject(USER);

  public userSelected$: Subject<User> = new Subject();

  private userUrl = serverUrl + '/users';

  private httpOptions = httpOptionsBase;

  constructor(private http: HttpClient) {
    this.retrieveUsers();
  }

  retrieveUsers(): void {
  }

  addUser(user: User): void {
  }

  setSelectedUser(userId: string): void {
  }

  deleteUser(user: User): void {
  }
}
