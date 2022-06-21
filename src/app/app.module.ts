import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {MyServerComponent} from "./Server/server.component";
import { AppZeeerversComponent } from './app-zeeervers/app-zeeervers.component';
import { HomeWrkTwoComponent } from './home-wrk-two/home-wrk-two.component';
import {HomeWrkOneCompoent} from "./HomWrkOne/homeWrk-compoent";


@NgModule({
  declarations: [
    AppComponent,
   MyServerComponent,
   AppZeeerversComponent,
   HomeWrkTwoComponent,
    HomeWrkOneCompoent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
