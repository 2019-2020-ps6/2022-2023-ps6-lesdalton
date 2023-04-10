import { Component } from '@angular/core';
import {Theme} from "../../../models/theme.models";
import {THEME_LIST} from "../../../mocks/theme.mocks";
import {ThemeService} from "../../../services/theme.service";
import {PopupService} from "../../../services/pop-up.service";
import {user} from "../../../models/user.models";
import {ActivatedRoute, Router, RouterLinkActive} from "@angular/router";
import {UsersService} from "../../../services/users.service";

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.scss']
})
export class ThemesListComponent {
  public themes:Theme[] = THEME_LIST;
  user: user = {id:'',firstName:'',lastName:'',config:{fontSize:16,lineHeight:20,letterSpacing:5}};

  constructor(private themeService:ThemeService,private  popupService:PopupService,private route: ActivatedRoute,private userService: UsersService) {
  }

  ngOnInit() {
    this.themeService.themes$.subscribe((themes) => (this.themes = themes));
    const id = this.route.snapshot.paramMap.get('id')!;
    this.user = this.userService.getUserById(id);
    this.ngOnInit2();
  }

  isPopupOpen = false;


  ngOnInit2(): void {
    this.popupService.getIsOpen().subscribe(isOpen => {
      this.isPopupOpen = isOpen; // mettre à jour l'état de l'ouverture du pop-up
    });
  }

  onValider() {
    this.popupService.closePopup(); // fermer le pop-up
  }

  onPopClick() {
    this.popupService.openPopup(); // ouvrir le pop-up
  }
}
