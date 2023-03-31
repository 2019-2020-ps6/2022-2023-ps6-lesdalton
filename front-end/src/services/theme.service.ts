import {Theme} from "../models/theme.models";
import {ThemeFormComponent} from "../app/quizzes/theme-form/theme-form.component";
import {THEME_LIST} from "../mocks/theme.mocks";
import {BehaviorSubject} from "rxjs";
import {User} from "../models/user.models";
import {USER} from "../mocks/user-list.mock";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class ThemeService{
  themes:Theme[]=THEME_LIST;
  public themes$: BehaviorSubject<Theme[]> = new BehaviorSubject(THEME_LIST);
  addTheme(name:string):void{
    this.themes.push({name:name});
    this.themes$.next(this.themes);
  }

  getThemeByName(name: string): Theme {
    const theme = this.themes.find(u => u.name === name)!;
    return theme;
  }
}
