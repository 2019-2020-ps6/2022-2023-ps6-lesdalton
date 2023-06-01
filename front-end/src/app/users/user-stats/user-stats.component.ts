import { Component } from '@angular/core';
import {User} from "../../../models/user.models";
import {UsersService} from "../../../services/users.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.scss']
})
export class UserStatsComponent {

  public userList: User[] = [];
  user!: User;


  constructor(private route: ActivatedRoute,private userService:UsersService) {}

  ngOnInit() {
    const id = this.route.snapshot.queryParamMap.get('user')!;

    this.route.queryParams.subscribe(() => {
      this.userService.getUserById(id).subscribe(
        response => {
          // Handle the user data received in the response
          console.log(response);
          // Assign the user data to this.user
          this.user = response;
        },
        error => {
          // Handle any errors that occur during the HTTP request
          console.error(error);
        }
      );
    });
  }
  filterType: string = 'total';



  sumThemePoints(statsByTheme: any[]): number {
    let sum = 0;
    for (let theme of statsByTheme) {
      sum += theme.themePoints;
    }
    return sum;
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
