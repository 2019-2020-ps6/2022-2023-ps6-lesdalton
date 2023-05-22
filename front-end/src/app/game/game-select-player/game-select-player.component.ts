import { Component } from '@angular/core';
import {USER} from "../../../mocks/user-list.mock";
import {User} from "../../../models/user.models";
import {UsersService} from "../../../services/users.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-game-select-player',
  templateUrl: './game-select-player.component.html',
  styleUrls: ['./game-select-player.component.scss']
})
export class GameSelectPlayerComponent {

  public selectedPlayer: User|undefined;

  public userList: User[] = [];

  constructor(private userService: UsersService, private router: Router,private http: HttpClient) {
    this.userService.users$.subscribe((users) => (this.userList =users));
  }

  ngOnInit(): void {

  }

  selectPlayer(player: User) {
    this.selectedPlayer = player;
    console.log("Joueur sélectionné :", this.selectedPlayer.firstName, this.selectedPlayer.lastName);
  }
}
