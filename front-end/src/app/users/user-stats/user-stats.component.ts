import { Component } from '@angular/core';
import {user} from "../../../models/user.models";
import {USER} from "../../../mocks/user-list.mock";

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.scss']
})
export class UserStatsComponent {

  public userList: user[] = USER;
  filterType: string = 'total';

  sortByTotalPoints(userList: any[]): any[] {
    return userList.sort((a, b) => b.totalPoints - a.totalPoints);
  }


}
