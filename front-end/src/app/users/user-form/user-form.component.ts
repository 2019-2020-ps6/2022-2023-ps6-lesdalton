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
      picture:['../../../assets/resources/profilPIc.png'],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      config: this.formBuilder.group({
        fontSize: [35, Validators.required],
        lineHeight: [40, Validators.required],
        letterSpacing: [5, Validators.required],
        contrast: ['high']
      }),
      stats: this.formBuilder.group({
        statsByTheme: this.formBuilder.array([])
      })
    });
  }


  addUser() {
    // Ajouter un nouvel utilisateur ici
    const userToCreate: User=this.userForm.getRawValue() as User;
    console.log('Add user : ',userToCreate);
    this.userService.addUser(userToCreate);
  }

  onFileChange(event: any): void {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const pictureData = reader.result as string;
        this.userForm.patchValue({
          picture: pictureData
        });
      };

      reader.readAsDataURL(file);
    }
  }


}
