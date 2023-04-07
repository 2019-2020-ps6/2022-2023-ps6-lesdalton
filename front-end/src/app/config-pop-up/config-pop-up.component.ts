import {Component, ElementRef} from '@angular/core';
import {user} from "../../models/user.models";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {PopupService} from "../../services/pop-up.service";

@Component({
  selector: 'app-config-pop-up',
  templateUrl: './config-pop-up.component.html',
  styleUrls: ['./config-pop-up.component.scss']
})
export class ConfigPopUpComponent {
  user: user = {id:'',firstName:'',lastName:'',config:{fontSize:16,lineHeight:5,letterSpacing:5}};
  min:number=16;
  max:number=35;

  constructor(private route: ActivatedRoute, private userService: UserService,private elementRef:ElementRef,private popupService:PopupService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.user = this.userService.getUserById(id);
    this.popupService.getIsOpen().subscribe(isOpen => {
      this.isPopupOpen = isOpen; // mettre à jour l'état de l'ouverture du pop-up
    });
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

  isPopupOpen = false;

  onValider() {
    this.popupService.closePopup(); // fermer le pop-up
  }

  onPopClick() {
    this.popupService.openPopup(); // ouvrir le pop-up
  }

}
