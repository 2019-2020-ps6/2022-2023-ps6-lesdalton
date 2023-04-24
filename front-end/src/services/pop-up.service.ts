import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  isOpen = new BehaviorSubject<boolean>(false); // BehaviorSubject pour suivre l'état de l'ouverture du pop-up
  isOpenFalse = new BehaviorSubject<boolean>(false); // BehaviorSubject pour suivre l'état de l'ouverture du pop-up

  constructor() { }

  getIsOpen() {
    return this.isOpen.asObservable(); // retourner un Observable pour suivre les changements de isOpen
  }

  getIsOpenFalse() {
    return this.isOpenFalse.asObservable(); // retourner un Observable pour suivre les changements de isOpen
  }

  openPopup() {
    this.isOpen.next(true); // ouvrir le pop-up
  }

  closePopup() {
    this.isOpen.next(false); // fermer le pop-up
  }

  openPopupFalse(){
    this.isOpen.next(true); // ouvrir le pop-up
  }
}
