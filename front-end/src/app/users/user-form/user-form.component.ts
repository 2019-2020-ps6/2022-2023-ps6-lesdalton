import { Component } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import { user } from 'src/models/user.models';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  public userForm: FormGroup;


  constructor(public formBuilder: FormBuilder, public userService: UserService) {
    this.userForm = this.formBuilder.group({
      firstName:[''],
      lastName: [''],
      id: [''],
    });
  }

  addUser() {
    // Ajouter un nouvel utilisateur ici
    const userToCreate: user=this.userForm.getRawValue() as user;
    console.log('Add user : ',userToCreate);
    this.userService.addUser(userToCreate);
  }
}
