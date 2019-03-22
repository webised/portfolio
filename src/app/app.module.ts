import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { WorksComponent } from './works/works.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import {  HttpClientModule } from '@angular/common/http';
import {WorksService} from './services/works.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    WorksComponent,
    HomeComponent,
    ServiceComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WorksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
