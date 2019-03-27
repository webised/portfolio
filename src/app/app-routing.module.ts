import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorksComponent } from './works/works.component';
import { ServiceComponent } from './service/service.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'works', component: WorksComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
