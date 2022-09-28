import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {LoginComponent} from "../components/login/login.component";
import {ForyoupageComponent} from "../components/foryoupage/foryoupage.component";
import {AppComponent} from "./app.component";
import {RegistrationComponent} from "../components/registration/registration.component";
import {UserListComponent} from "../components/user-list/user-list.component";
import {UserDetailsComponent} from "../components/user-details/user-details.component";
import {AddUserComponent} from "../components/add-user/add-user.component";


const routes: Routes = [
  {path: 'home', component:ForyoupageComponent },
  {path: 'login',component:LoginComponent},
  {path: 'registration',component:RegistrationComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'user', component: UserListComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: 'add', component: AddUserComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[ForyoupageComponent,LoginComponent,RegistrationComponent,AddUserComponent,UserListComponent,UserDetailsComponent]

