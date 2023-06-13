import { HomeComponentComponent } from './home-component/home-component.component';
import { HomerutaComponent } from './homeruta/homeruta.component';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PermissionsGuard } from './guard/permissions.guard';
import { DataResolverService } from './resolvers/data.resolver.saervice';

const routes: Routes = [
  {path: '',redirectTo: '/homerutas',pathMatch: 'full'},
  {path: 'contact-template/:id', component:ContactComponent, canActivate: [PermissionsGuard]},
  {path: 'homerutas', component: HomerutaComponent},
  {path: 'home', component: HomeComponentComponent},
  {path: 'contact-reactive', loadChildren: ()=>
    import('./contact-reactive/contact-reactive.module')
    .then(m => m.ContactReactiveModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
