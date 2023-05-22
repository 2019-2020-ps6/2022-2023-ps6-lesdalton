import { Component } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/models/user.models';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  public userForm: FormGroup;




  constructor(public formBuilder: FormBuilder, public userService: UsersService) {
    this.userForm = this.formBuilder.group({
      firstName:[''],
      lastName: [''],
      config:{config:{fontSize:20,lineHeight:5,letterSpacing:5}},
      stats: {
        statsByTheme: [{themeName:"",themePoints:0}],
      }
    });
  }

  addUser() {
    // Ajouter un nouvel utilisateur ici
    const userToCreate: User=this.userForm.getRawValue() as User;
    console.log('Add user : ',userToCreate);
    this.userService.addUser(userToCreate);
  }
}
