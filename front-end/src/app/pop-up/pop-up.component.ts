import {Component, ElementRef, EventEmitter, Input, Output} from '@angular/core';
import {user} from "../../models/user.models";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {PopupService} from "../../services/pop-up.service";

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {
  user: user = {id:'',firstName:'',lastName:'',config:{fontSize:16,lineHeight:5,letterSpacing:5}};

  min:number=20;
  max:number=45;
  constructor(private route: ActivatedRoute, private userService: UserService,private elementRef:ElementRef,private popUpService: PopupService) {}

  @Output() valider: EventEmitter<void> = new EventEmitter<void>();


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

  onValider() {
    this.valider.emit();
  }


}
