import { Component } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/models/user.models';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  public userForm: FormGroup;

  /*constructor() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      id: new FormControl('',Validators.required)
    });
  }*/

  constructor(public formBuilder: FormBuilder, public userService: UserService) {
    this.userForm = this.formBuilder.group({
      firstName:[''],
      lastName: [''],
      id: [''],
    });
  }

  addUser() {
    // Ajouter un nouvel utilisateur ici
    const userToCreate: User=this.userForm.getRawValue() as User;
    console.log('Add user : ',userToCreate);
    this.userService.addUser(userToCreate);
  }
}
