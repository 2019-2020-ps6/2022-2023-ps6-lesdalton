import { Component } from '@angular/core';
import {USER} from "../../../mocks/user-list.mock";
import {User} from "../../../models/user.models";
@Component({
  selector: 'app-game-select-player',
  templateUrl: './game-select-player.component.html',
  styleUrls: ['./game-select-player.component.scss']
})
export class GameSelectPlayerComponent {
  public userList: User[] = USER;
  public selectedPlayer: User|undefined;

  ngOnInit(): void {
  }

  selectPlayer(player: User) {
    this.selectedPlayer = player;
    console.log("Joueur sélectionné :", this.selectedPlayer.firstName, this.selectedPlayer.lastName);
  }
}
