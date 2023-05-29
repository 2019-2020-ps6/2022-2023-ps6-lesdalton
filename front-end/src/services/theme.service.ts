import {Theme} from "../models/theme.models";
import {ThemeFormComponent} from "../app/quizzes/theme-form/theme-form.component";
import {BehaviorSubject} from "rxjs";
import {User} from "../models/user.models";
import {USER} from "../mocks/user-list.mock";
import {Injectable} from "@angular/core";
import {Quiz} from "../models/quiz.model";
import {HttpClient} from "@angular/common/http";
import {httpOptionsBase, serverUrl} from "../configs/server.config";
@Injectable({
  providedIn: 'root'
})
export class ThemeService{
  themes:Theme[]=[];
  public themes$: BehaviorSubject<Theme[]> = new BehaviorSubject(this.themes);
  private themeUrl = serverUrl + '/themes';


  constructor(private http: HttpClient) {
    this.loadThemes();
  }
  loadThemes(): void{
    this.http.get<Theme[]>(this.themeUrl).
    subscribe(themeList=>{
      this.themes=themeList;
      this.themes$.next(this.themes);
    });
  }
  addTheme(name: string): void {
    let theme={name:name}
    this.themes.push(theme);
    this.themes$.next(this.themes);
    this.http.post(this.themeUrl, theme, httpOptionsBase).subscribe(
      response => {
        console.log('Theme ajouté avec succès :', response);
      },
      error => {
        console.error('Erreur lors de l\'ajout du theme :', error);

        // Afficher les détails de l'erreur de validation
        if (error.error && error.error.details) {
          console.log('Détails de l\'erreur de validation :', error.error.details);
        }
      }
    );
  }


  getThemeByName(name: string): Theme {
    const theme = this.themes.find(u => u.name === name)!;
    return theme;
  }
}
