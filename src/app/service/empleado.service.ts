import { Injectable } from "@angular/core";
import { Empleado } from "../empleado.model";
import { ServicioEmpleadoService } from "./servicio-empleado.service";
import { DataServices } from "./data.services";

@Injectable()
export class EmpleService{

  empleadosSer : Empleado[]=[];

  constructor(private serVentaPopup: ServicioEmpleadoService, private dataService: DataServices){}

  setEmpleados(setEmplea:Empleado[]){
    this.empleadosSer = setEmplea;
  }

  getEmpleados(){
    return this.dataService.loadEmpleados();
  }

  addemplea(empleado: Empleado){
    //this.serVentaPopup.popop("Person Add" + "\n"+ empleado.nombre+"\n"+"Salario: "+empleado.salario);
    this.empleadosSer.push(empleado);
    this.dataService.saveEmpleados(this.empleadosSer);
  }

  searchEmpleado(indice:number){
    let empleadoIndex:Empleado = this.empleadosSer[indice];
    return empleadoIndex;
  }

  update(indice: number, empleado:Empleado){
    let empleaUpdate = this.empleadosSer[indice];
    empleaUpdate.nombre = empleado.nombre
    empleaUpdate.apellido= empleado.apellido
    empleaUpdate.cargo = empleado.cargo
    empleaUpdate.salario= empleado.salario
    this.dataService.updateEmpleado(indice,empleado);
  }

  Delette(index: number){
    this.empleadosSer.splice(index, 1);
    this.dataService.Delette(index);
    if(this.empleadosSer!=null) this.dataService.saveEmpleados(this.empleadosSer);
  }
}
