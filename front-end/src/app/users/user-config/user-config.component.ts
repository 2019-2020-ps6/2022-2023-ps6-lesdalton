import {Component, ElementRef, ViewChild} from '@angular/core';
import {User} from "../../../models/user.models";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {HorizontalGaugeComponent} from "../../horizontal-gauge/horizontal-gauge.component";
import {style} from "@angular/animations";

@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.component.html',
  styleUrls: ['./user-config.component.scss']
})
export class UserConfigComponent {

  @ViewChild('horizontalGauge') horizontalGauge!: HorizontalGaugeComponent;

  user: User = {id:'',firstName:'',lastName:'',config:{fontSize:10}};

  fontSize:string = this.user.config.fontSize+'px';
  constructor(private route: ActivatedRoute, private userService: UserService,private elementRef:ElementRef) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.user = this.userService.getUserById(id);
  }

  updateValue() {
    this.fontSize = this.user.config.fontSize+'px';
    console.log(this.user.config.fontSize);
    if (this.user.config.fontSize < 16) {
      this.user.config.fontSize = 16;
    } else if (this.user.config.fontSize > 30) {
      this.user.config.fontSize = 30;
    }
  }

  changeFontSize() {
    let value = this.user.config.fontSize;
    console.log(value);
    const textElements: NodeListOf<HTMLElement> = this.elementRef.nativeElement.querySelectorAll('.resize');
    textElements.forEach((element: HTMLElement) => {
      element.style.fontSize = value + 'px';
    });
    const button:HTMLElement = this.elementRef.nativeElement.querySelector('.button-card');
    const newValue =  30*(value/100+1);
    console.log(newValue);
    button.style.fontSize = value + 'px';
    this.fontSize = this.user.config.fontSize+'px';
    console.log(this.user.config.fontSize);
  }

  onSaveConfig(){
    this.userService.updateUser(this.user);
  }

}
