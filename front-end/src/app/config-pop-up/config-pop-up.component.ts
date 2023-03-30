import {Component, ElementRef} from '@angular/core';
import {User} from "../../models/user.models";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-config-pop-up',
  templateUrl: './config-pop-up.component.html',
  styleUrls: ['./config-pop-up.component.scss']
})
export class ConfigPopUpComponent {
  user: User = {id:'',firstName:'',lastName:'',config:{fontSize:16,lineHeight:5}};
  min:number=16;
  max:number=35;

  constructor(private route: ActivatedRoute, private userService: UserService,private elementRef:ElementRef) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.user = this.userService.getUserById(id);
  }

  value = 0;
  updateValue() {
    if (this.value < 16) {
      this.value = 16;
    } else if (this.value > 35) {
      this.value = 35;
    }
  }

  changeFontSize() {
    const textElements: NodeListOf<HTMLElement> = this.elementRef.nativeElement.querySelectorAll('.resize');
    textElements.forEach((element: HTMLElement) => {
      const newValue =  30*(this.value/100+1);
      console.log(newValue);
      element.style.fontSize = newValue + 'px';
    });
    const button:HTMLElement = this.elementRef.nativeElement.querySelectorAll('.button-card');
    const newValue =  30*(this.value/100+1);
    console.log(newValue);
    button.style.fontSize = newValue + 'px';
  }
}
