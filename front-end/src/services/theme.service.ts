import {Theme} from "../models/theme.models";
import {ThemeFormComponent} from "../app/quizzes/theme-form/theme-form.component";
import {BehaviorSubject, Observable, of} from "rxjs";
import {User} from "../models/user.models";
import {Injectable} from "@angular/core";
import {Quiz} from "../models/quiz.model";
import {HttpClient} from "@angular/common/http";
import {httpOptionsBase, serverUrl} from "../configs/server.config";
@Injectable({
  providedIn: 'root'
})
export class ThemeService{

  private quizzes: Quiz[] = [];
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(this.quizzes);
  private quizUrl = serverUrl + '/quizzes';
  themes:Theme[]=[];
  themesUnused: Theme[]=[];
  public themes$: BehaviorSubject<Theme[]> = new BehaviorSubject(this.themes);
  public themesUnused$ : BehaviorSubject<Theme[]> = new BehaviorSubject(this.themesUnused);
  public themeChanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public themeUnusedChanged : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private themeUrl = serverUrl + '/themes';


  constructor(private http: HttpClient) {
    this.loadThemes();
  }
  loadThemes(): void {
    this.http.get<Theme[]>(this.themeUrl).subscribe(themeList => {
      this.themes = themeList;
      this.themes$.next(this.themes);

      this.http.get<Quiz[]>(this.quizUrl).subscribe(quizList => {
        this.quizzes = quizList;
        this.quizzes$.next(this.quizzes);

        // Appel de la méthode getUnusedThemes pour obtenir les thèmes non utilisés
        this.themesUnused = this.getUnusedThemes(this.themes, this.quizzes);
        this.themesUnused$.next(this.themesUnused);
      });
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
    console.log("kkk"+this.themes$.value.length)
    return theme;
  }

  deleteTheme(themeName: string): void {
    const themeIndex = this.themes.findIndex(t => t.name === themeName);
    if (themeIndex !== -1) {
      const deletedTheme = this.themes[themeIndex];
      this.themes.splice(themeIndex, 1);

      this.http.delete(`${this.themeUrl}/${deletedTheme.id}`).subscribe(
        () => {
          this.themes$.next(this.themes);
          this.themesUnused$.next(this.themesUnused);
          this.themeChanged.next(true);
          this.themeUnusedChanged.next(true);
          console.log('Thème supprimé avec succès');
        },
        error => {
          console.error('Erreur lors de la suppression du thème :', error);
        }
      );
    }
  }

  getUnusedThemes(themes: Theme[], quizzes : Quiz[]) {
    const usedThemes = new Set();

    quizzes.forEach(quiz => {
      if (quiz.theme && quiz.theme.name) {
        usedThemes.add(quiz.theme.name);
      }
    });

    const unusedThemes = themes.filter(theme => !usedThemes.has(theme.name));

    return unusedThemes;
  }


}
