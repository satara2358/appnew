import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadoService } from '../service/servicio-empleado.service';
import { EmpleService } from '../service/empleado.service';

@Component({
  selector: 'app-proyect-component',
  templateUrl: './proyect-component.component.html',
  styleUrls: ['./proyect-component.component.scss']
})
export class ProyectComponentComponent {

  constructor(private router:Router, private services:ServicioEmpleadoService, private serviceemple: EmpleService){}

  algo: string =''
  inApelli:string=''
  incargo:string=''
  insalario:number=0
  title = 'Listado de Empleados';
  empleadosProyect : Empleado[]=[]

  addempleadoP(){
    let empleNew = new Empleado(this.algo,this.inApelli, this.incargo, this.insalario);
    //this.services.popop("empleeado llamado : "+empleNew.nombre);
    this.serviceemple.addemplea(empleNew);
    this.router.navigate([""]);
  }

  volverHome(){
    this.router.navigate([""]);
  }
  volverContatc(){
    this.router.navigate(["Contacto"])
  }

  ngOnInit(): void {
    this.empleadosProyect=this.serviceemple.empleadosSer;
  }

}
