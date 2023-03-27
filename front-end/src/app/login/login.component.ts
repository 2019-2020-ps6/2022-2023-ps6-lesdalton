import {Component, ElementRef} from '@angular/core';
import {Login} from "../../models/login.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(public router:Router,private elementRef: ElementRef) {
  }
  onSubmit() {
    this.router.navigate(['/actions']);
  }
}
