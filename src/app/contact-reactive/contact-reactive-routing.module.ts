import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactReactiveComponent } from './contact-reactive.component';
import { DataResolverService } from '../resolvers/data.resolver.saervice';

const routes: Routes = [
  {
    path: '',
    component:ContactReactiveComponent,
    resolve:{department: DataResolverService}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactReactiveRoutingModule { }
