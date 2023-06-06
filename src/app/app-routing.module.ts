import { HomeComponentComponent } from './home-component/home-component.component';
import { HomerutaComponent } from './homeruta/homeruta.component';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '',redirectTo: '/homerutas',pathMatch: 'full'},
  {path: 'contact-reactive', component:ContactReactiveComponent},
  {path: 'contact-template', component:ContactComponent},
  {path: 'homerutas', component: HomerutaComponent},
  {path: 'home', component: HomeComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
