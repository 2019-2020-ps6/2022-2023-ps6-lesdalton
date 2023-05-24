import { Component } from '@angular/core';
import {User} from "../../../models/user.models";
import {USER} from "../../../mocks/user-list.mock";
import {serverUrl} from "../../../configs/server.config";
import {UsersService} from "../../../services/users.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.scss']
})
export class UserStatsComponent {

  public userList: User[] = [];


  constructor(private userService: UsersService, private router: Router,private http: HttpClient) {
    this.userService.users$.subscribe((users) => (this.userList =users));
  }
  filterType: string = 'total';



  sumThemePoints(statsByTheme: any[]): number {
    let sum = 0;
    for (let theme of statsByTheme) {
      sum += theme.themePoints;
    }
    return sum;
  }
  sortByTotalPoints(userList: any[]): any[] {

    return userList.sort((a, b) => this.sumThemePoints(b.stats.statsByTheme) - this.sumThemePoints(a.stats.statsByTheme));
  }


  sortByThemePoints(userList: any[]): any[]{
    return userList
    /*return userList.sort((a,b)=>{
      let aTotalPoints = 0;
      let bTotalPoints = 0;
      for(let i=0;i<a.stats.statsByTheme.length;i++){
        aTotalPoints += a.stats.statsByTheme[i].themePoints;
      }
      for(let i=0;i<b.stats.statsByTheme.length;i++){
        bTotalPoints += b.stats.statsByTheme[i].themePoints;
      }
      return bTotalPoints - aTotalPoints;
    });*/
  }



}
