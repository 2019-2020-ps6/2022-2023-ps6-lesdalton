import {Component, ViewChild} from '@angular/core';
import {User} from "../../../models/user.models";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {HorizontalGaugeComponent} from "../../horizontal-gauge/horizontal-gauge.component";

@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.component.html',
  styleUrls: ['./user-config.component.scss']
})
export class UserConfigComponent {

  @ViewChild('horizontalGauge') horizontalGauge!: HorizontalGaugeComponent;

  user: User = {id:'',firstName:'',lastName:''};

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.user = this.userService.getUserById(id);
  }

  changeFontSize() {
    this.horizontalGauge.changeFontSize();
    const textElement: HTMLElement = document.querySelector('.text')!;
    textElement.style.fontSize = this.horizontalGauge.value + 'px';
  }

}
