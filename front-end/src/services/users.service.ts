import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import { User} from "../models/user.models";
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
  private users: User[] = [];
  /*
   Observable which contains the list of users.
   */
  public users$: BehaviorSubject<User[]> = new BehaviorSubject(this.users);
  private userUrl=serverUrl+'/users';

  private httpOptions = httpOptionsBase;


  constructor(private http: HttpClient) {
    this.loadUsers();
  }

  loadUsers(): void {
    this.http.get<User[]>(this.userUrl).subscribe(
      users => {
        this.users = users;
        this.users$.next(this.users);
      },
      error => {
        console.error('Erreur lors du chargement des utilisateurs :', error);
      }
    );
  }


  /*
   Adds a new user to the list of users.
   */
  addUser(user: User): void {
    this.users.push(user);
    this.users$.next(this.users);
    this.http.post(this.userUrl, user, httpOptionsBase).subscribe(
      response => {
        console.log('Utilisateur ajouté avec succès :', response);
      },
      error => {
        console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);

        // Afficher les détails de l'erreur de validation
        if (error.error && error.error.details) {
          console.log('Détails de l\'erreur de validation :', error.error.details);
        }
      }
    );
  }



  /*
   Deletes the specified user from the list of users.
   */
  deleteUser(user: User): void {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
      this.users$.next(this.users);

      this.http.delete(`${this.userUrl}/${user.id}`).subscribe(
        () => {
          console.log('Utilisateur supprimé avec succès');
        },
        error => {
          console.error('Erreur lors de la suppression de l\'utilisateur :', error);
        }
      );
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
    const index = this.users.findIndex(u => u.firstName === user.firstName);
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

  getUserByName(name: string): User {
    const user = this.users.find(u => u.firstName === name)!;
    return user;
  }

  updateUserScore(userName: string, themeName: string, newScore: number) {
    const user = this.getUserByName(userName);
    const stats = user.stats.statsByTheme;

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
