import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { WorksComponent } from './works/works.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { WorksService } from './services/works.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule  } from '@angular/fire/firestore';
import { environement } from './environement';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { WorkformComponent } from './workform/workform.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    WorksComponent,
    HomeComponent,
    ServiceComponent,
    ContactComponent,
    WorkformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environement),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [WorksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
