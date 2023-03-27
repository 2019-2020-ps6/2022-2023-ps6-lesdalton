import {Handicap} from './handicap.models';
import {Router} from '@angular/router';

export abstract class Trouble {

    public trouble:Handicap | undefined;

    constructor(public router:Router){
        this.setTrouble()
    }

    setTrouble() {
        
        if (this.router.url.startsWith('/vue')) {
          this.trouble = Handicap.Vue;
        }
        
    
      }

}