import { Component, Input, OnInit } from "@angular/core";
import { Empleado } from "../empleado.model";
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
  //styles: [`p{background-color: blue;}`]
})
export class EmpleadosComponent {

  @Input() empleadoList:Empleado;
  @Input() indexx:number;

  constructor(){
    
  }
  items = ['']

  agregarC(newitem: string){
    this.items.push(newitem)
  }


}