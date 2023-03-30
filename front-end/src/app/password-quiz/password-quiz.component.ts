import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-password-quiz',
  templateUrl: './password-quiz.component.html',
  styleUrls: ['./password-quiz.component.scss']
})
export class PasswordQuizComponent {
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.password === '1234' ) {
      this.router.navigate(['/add-quiz']);
    } else {
      alert('Mot de passe incorrect !');
    }

    this.password = '';
  }

}
