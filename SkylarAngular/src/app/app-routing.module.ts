import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {LoginComponent} from "../components/login/login.component";
import {ForyoupageComponent} from "../components/foryoupage/foryoupage.component";
import {AppComponent} from "./app.component";
import {RegistrationComponent} from "../components/registration/registration.component";





const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('../components/login/login-routing.module').then(m => m.LoginRoutingModule),
    component:LoginComponent,

  },
  {path: 'home', component:ForyoupageComponent },
  {path: 'registration',component:RegistrationComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[ForyoupageComponent,LoginComponent,RegistrationComponent]

