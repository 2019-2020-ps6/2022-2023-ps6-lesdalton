import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.password === '1234' ) {
      this.router.navigate(['/user-list']);
    } else {
      alert('Mot de passe incorrect !');
    }

    this.password = '';
  }

}
