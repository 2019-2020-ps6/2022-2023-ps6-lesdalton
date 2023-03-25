import { Component } from '@angular/core';
import {ThemeService} from "../../../services/theme.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-theme-form',
  templateUrl: './theme-form.component.html',
  styleUrls: ['./theme-form.component.scss']
})
export class ThemeFormComponent {
  themeForm = new FormGroup({
    name: new FormControl(),
  });
  constructor(private themeService:ThemeService) {
  }

  onSubmit(){
    this.themeService.addTheme(this.themeForm.controls.name.value);
    this.themeForm.reset();
  }
}
