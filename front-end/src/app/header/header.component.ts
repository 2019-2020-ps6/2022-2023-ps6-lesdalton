import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {

    public Logo: string='./assets/resources/QuizForAll.png';


    constructor() {
    }

    ngOnInit(): void {}
}
