import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LoginComponent} from "../components/login/login.component";
import {ForyoupageComponent} from "../components/foryoupage/foryoupage.component";
import {AppRoutingModule, routingComponents} from "./app-routing.module";
import {RouterModule, Routes} from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
