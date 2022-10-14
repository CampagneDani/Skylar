import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {LoginComponent} from "../components/login/login.component";
import {ForyoupageComponent} from "../components/foryoupage/foryoupage.component";
import {AppComponent} from "./app.component";
import {RegistrationComponent} from "../components/registration/registration.component";
import {AdminComponent} from "../components/roles/admin/admin.component";
import {FinanceComponent} from "../components/roles/Finance/finance.component";
import {ManagementComponent} from "../components/roles/Management/management.component";





const routes: Routes = [

  {path: 'home', component:ForyoupageComponent },
  {path: 'registration',component:RegistrationComponent},
  {path: 'login',component:LoginComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'Admin',component:AdminComponent},
  { path:'Finance',component:FinanceComponent},
  { path:'Management',component:ManagementComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[ManagementComponent,FinanceComponent,ForyoupageComponent,LoginComponent,RegistrationComponent,AdminComponent]

