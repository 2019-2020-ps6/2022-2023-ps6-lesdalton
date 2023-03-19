import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent {
  constructor(public router:Router) {
  }
}
