import { Component } from '@angular/core';
import {ThemeService} from "../../../services/theme.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Theme} from "../../../models/theme.models";

@Component({
  selector: 'app-theme-form',
  templateUrl: './theme-form.component.html',
  styleUrls: ['./theme-form.component.scss']
})
export class ThemeFormComponent {

  selectedTheme!: string;

  public themeList:Theme[] = [];
  themeForm = new FormGroup({
    name: new FormControl(),
  });

  quizForm = new FormGroup({
    name: new FormControl(),
    theme: new FormControl(),
    question: new FormControl()
  });
  constructor(private themeService:ThemeService) {
    this.themeService.themes$.subscribe((themes) => (this.themeList =themes));
  }

  onSubmit(){
    this.themeService.addTheme(this.themeForm.controls.name.value);
    this.themeForm.reset();
  }

  onThemeSelectionChange(theme: string)  {
    this.selectedTheme = theme;
  }

  deleteTheme(themeName : string) {
    // Vérifiez si un thème est sélectionné
    if (this.selectedTheme) {
      console.log("Theme supprimé :", themeName);
      this.themeService.deleteTheme(themeName);
    }
  }


}
