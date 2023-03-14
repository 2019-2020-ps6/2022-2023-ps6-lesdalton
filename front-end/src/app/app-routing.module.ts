import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { User } from 'src/models/user.models';
import { UserComponent } from './users/user/user.component';
import { UserFormComponent } from './users/user-form/user-form.component';






const routes: Routes = [
    {path: 'users', 
    component: UserComponent, 
    children: [
        {path: 'user', component: UserComponent},
        {path:'user-form', component: UserFormComponent},
    ]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
