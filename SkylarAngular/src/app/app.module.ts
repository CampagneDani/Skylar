import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutingModule, routingComponents} from "./app-routing.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "../services/user.service";
import {AdminGuardService} from "../guard/admin-guard.service";
import {FinanceGuardService} from "../guard/finance-guard.service";
import {ManagementGuardService} from "../guard/management-guard.service";
import {NavbarComponent} from "../components/navbar/navbar.component";
import {NgApexchartsModule} from "ng-apexcharts";




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgApexchartsModule,

  ],
  providers: [UserService,AdminGuardService,FinanceGuardService,ManagementGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
