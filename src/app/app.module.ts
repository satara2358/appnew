import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ButtonComponent } from './button/button.component';
import { FormNewItemComponent } from './form-new-item/form-new-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CaratEmpleCompoComponent } from './carat-emple-compo/carat-emple-compo.component';
import { ServicioEmpleadoService } from './service/servicio-empleado.service';
import { EmpleService } from './service/empleado.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectComponentComponent } from './proyect-component/proyect-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { DataServices } from './service/data.services';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { FilterPipe } from 'src/pipe/filter.pipe';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/serviceLogin';
import { CookieService } from 'ngx-cookie-service';
import { ContactComponent } from './contact/contact.component';
import { HomerutaComponent } from './homeruta/homeruta.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';

const appRouts:Routes=[
  {path:'Home2', component:HomeComponentComponent},
  {path:'Proyectos', component:ProyectComponentComponent},
  {path:'Informacion', component:QuienesComponentComponent},
  {path:'Contacto', component:ContactComponentComponent},
  {path:'update/:id', component:UpdateComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    ButtonComponent,
    FormNewItemComponent,
    CaratEmpleCompoComponent,
    HomeComponentComponent,
    ProyectComponentComponent,
    QuienesComponentComponent,
    ContactComponentComponent,
    HomeComponentComponent,
    ProyectComponentComponent,
    QuienesComponentComponent,
    ContactComponentComponent,
    UpdateComponent,
    ErrorComponent,
    CiudadesComponent,
    FilterPipe,
    LoginComponent,
    ContactComponent,
    HomerutaComponent,
    NavbarComponent,
    CardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRouts),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ServicioEmpleadoService,
    EmpleService,
    DataServices,
    LoginService,
    CookieService
  ],
  bootstrap: [AppComponent]

})
export class AppModule {}
