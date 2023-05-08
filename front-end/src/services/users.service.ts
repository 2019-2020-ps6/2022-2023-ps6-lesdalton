import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import { user} from "../models/user.models";
import { serverUrl, httpOptionsBase } from '../configs/server.config';
import { USER } from 'src/mocks/user-list.mock';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  /*
   The list of users.
   */
  private users: user[] = USER;

  /*
   Observable which contains the list of users.
   */
  public users$: BehaviorSubject<user[]> = new BehaviorSubject(USER);

  /*
   Adds a new user to the list of users.
   */
  addUser(user: user): void {
    this.users.push(user);
    this.users$.next(this.users);
  }

  /*
   Deletes the specified user from the list of users.
   */
  deleteUser(user: user): void {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
      this.users$.next(this.users);
    }
  }

  /*
   Returns the list of users.
   */
  getUsers(): user[] {
    return this.users;
  }


  /*
   Updates the specified user with the provided data.
   */
  updateUser(user: user): void {
    const index = this.users.findIndex(u => u.firstName === user.firstName);
    console.log("User edited : ",this.users[index]);
    if (index !== -1) {
      this.users[index] = user;
      this.users$.next(this.users);
    }
  }

  getUserById(id: string): user {
    const user = this.users.find(u => u.id === id)!;
    return user;
  }

  getUserByName(name: string): user {
    const user = this.users.find(u => u.firstName === name)!;
    return user;
  }

  updateUserScore(userName: string, themeName: string, newScore: number) {
    const user = this.getUserByName(userName);
    const stats = user.stats?.statsByTheme;

    // Trouver l'objet statsByTheme correspondant au thème donné
    const theme = stats.find(t => t.themeName === themeName);

    // Si l'objet statsByTheme n'existe pas encore pour ce thème, le créer
    if (!theme) {
      stats.push({themeName: themeName, themePoints: newScore});
    } else {
      // Si l'objet statsByTheme existe déjà pour ce thème, mettre à jour le score
      theme.themePoints += newScore;
    }
  }


}