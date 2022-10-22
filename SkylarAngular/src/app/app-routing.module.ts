import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "../components/login/login.component";
import {ForyoupageComponent} from "../components/foryoupage/foryoupage.component";
import {RegistrationComponent} from "../components/registration/registration.component";
import {AdminComponent} from "../components/roles/admin/admin.component";
import {FinanceComponent} from "../components/roles/Finance/finance.component";
import {ManagementComponent} from "../components/roles/Management/management.component";
import {AdminGuardService} from "../guard/admin-guard.service";
import {FinanceGuardService} from "../guard/finance-guard.service";
import {ManagementGuardService} from "../guard/management-guard.service";
import {UserListComponent} from "../components/user-list/user-list.component";
import {ProjectListComponent} from "../components/project-list/project-list.component";
import {BudgetListComponent} from "../components/budget-list/budget-list.component";





const routes: Routes = [

  {path: 'home', component:ForyoupageComponent },
  {path: 'registration',component:RegistrationComponent},
  {path: 'login',component:LoginComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'Admin',component:AdminComponent,canActivate:[AdminGuardService]},
  { path:'Finance',component:FinanceComponent, canActivate:[FinanceGuardService]},
  { path:'Management',component:ManagementComponent,canActivate:[ManagementGuardService]},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[BudgetListComponent,ProjectListComponent,UserListComponent,ManagementComponent,FinanceComponent,ForyoupageComponent,LoginComponent,RegistrationComponent,AdminComponent]

