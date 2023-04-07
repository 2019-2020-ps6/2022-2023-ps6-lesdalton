import { Component } from '@angular/core';
import {USER} from "../../../mocks/user-list.mock";
import {user} from "../../../models/user.models";
@Component({
  selector: 'app-game-select-player',
  templateUrl: './game-select-player.component.html',
  styleUrls: ['./game-select-player.component.scss']
})
export class GameSelectPlayerComponent {
  public userList: user[] = USER;
  public selectedPlayer: user|undefined;

  ngOnInit(): void {
  }

  selectPlayer(player: user) {
    this.selectedPlayer = player;
    console.log("Joueur sélectionné :", this.selectedPlayer.firstName, this.selectedPlayer.lastName);
  }
}
