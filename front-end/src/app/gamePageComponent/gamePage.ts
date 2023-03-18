import { Component, OnInit } from '@angular/core';
import { gameQuestionComponent } from '../gameQuestionComponent/gameQuestion';
import { gameAnswerComponent } from '../gameAnswerComponent/gameAnswer';

@Component({
    selector: 'gamePage',
    templateUrl: './gamePage.html',
    styleUrls: ['./gamePage.scss']
})

export class gamePageComponent implements OnInit {
    constructor() {}
    ngOnInit(): void {}
} 