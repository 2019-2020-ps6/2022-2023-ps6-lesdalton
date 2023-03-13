import { Injectable } from '@angular/core'; 
import {HttpClient} from '@angular/common/http';
import { User } from '../models/user.models';
import { USER_LIST } from '../mocks/user-list-with-id.mock';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
    private users: User[] = USER_LIST; 
    public quizzes$: BehaviorSubject<User[]> = new BehaviorSubject(this.users);

    constructor(private http: HttpClient) {}

    addQuizz() { }

    deleteQuizz(id: string) {} 

 

}