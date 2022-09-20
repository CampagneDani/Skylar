import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {LoginComponent} from "../components/login/login.component";
import {ForyoupageComponent} from "../components/foryoupage/foryoupage.component";
import {AppComponent} from "./app.component";
import {RegistrationComponent} from "../components/registration/registration.component";


const routes: Routes = [
  {path: 'home', component:ForyoupageComponent },
  {path: 'login',component:LoginComponent},
  {path: 'registration',component:RegistrationComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[ForyoupageComponent,LoginComponent,RegistrationComponent]
