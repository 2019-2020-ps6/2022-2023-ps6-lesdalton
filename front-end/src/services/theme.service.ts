import {Theme} from "../models/theme.models";
import {ThemeMocks} from "../mocks/theme.mocks";
import {BehaviorSubject} from "rxjs";
import {User} from "../models/user.models";
import {USER} from "../mocks/user-list.mock";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class ThemeService{
  themes:Theme[]=ThemeMocks;
  public themes$: BehaviorSubject<Theme[]> = new BehaviorSubject(ThemeMocks);
  addTheme(name:string):void{
    this.themes.push({name:name});
    this.themes$.next(this.themes);
  }


  getThemeByName(name: string): Theme {
    const theme = this.themes.find(u => u.name === name)!;
    return theme;
  }
}
