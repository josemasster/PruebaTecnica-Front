import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbaarComponent } from './components/navbar/navbaar.component';

import { HttpClientModule } from '@angular/common/http';

import { AgendaComponent } from './components/agenda/agenda.component';
import { CreatecontactComponent } from './components/createcontact/createcontact.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbaarComponent,
    AgendaComponent,
    CreatecontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
