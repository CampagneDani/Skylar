import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "../components/login/login.component";
import {ForyoupageComponent} from "../components/foryoupage/foryoupage.component";
import {RegistrationComponent} from "../components/registration/registration.component";
import {AdminComponent} from "../components/roles/admin/admin.component";

import {AdminGuardService} from "../guard/admin-guard.service";
import {FinanceGuardService} from "../guard/finance-guard.service";
import {ManagementGuardService} from "../guard/management-guard.service";
import {UserListComponent} from "../components/user-list/user-list.component";
import {ProjectListComponent} from "../components/project-list/project-list.component";
import {BudgetListComponent} from "../components/budget-list/budget-list.component";
import {NavbarComponent} from "../components/navbar/navbar.component";
import {FinanceComponent} from "../components/roles/Finance/finance.component";
import {ManagementComponent} from "../components/roles/Management/management.component";
import {BankaccountListComponent} from "../components/bankaccount-list/bankaccount-list.component";
import {BookingListComponent} from "../components/booking-list/booking-list.component";
import {FooterComponent} from "../components/footer/footer.component";

const routes: Routes = [
  //Routes can be reached by "/..."
  {path: 'home', component:ForyoupageComponent },
  {path: 'registration',component:RegistrationComponent},
  {path: 'login',component:LoginComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'Admin',component:AdminComponent,canActivate:[AdminGuardService]},
  //{ path:'Finance',component:FinanceComponent, canActivate:[FinanceGuardService]},
  { path:'Management',component:ManagementComponent,canActivate:[ManagementGuardService]},
  { path:'budget-list',component:BudgetListComponent,canActivate:[ManagementGuardService]},
  {path:'bankaccount-list',component:BankaccountListComponent,canActivate:[ManagementGuardService]},
  {path:'booking-list',component:BookingListComponent,canActivate:[ManagementGuardService]},
  {path:'project-list',component:ProjectListComponent,canActivate:[ManagementGuardService]},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
// Constant variable for every possible used HTML in Router-Outlet(in app-component)
export const routingComponents =[FooterComponent,BookingListComponent,BankaccountListComponent,BudgetListComponent,NavbarComponent,ProjectListComponent,UserListComponent,ManagementComponent,FinanceComponent,ForyoupageComponent,LoginComponent,RegistrationComponent,AdminComponent]

