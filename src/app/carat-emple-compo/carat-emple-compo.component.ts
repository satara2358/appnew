import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ServicioEmpleadoService } from '../service/servicio-empleado.service';

@Component({
  selector: 'app-carat-emple-compo',
  templateUrl: './carat-emple-compo.component.html',
  styleUrls: ['./carat-emple-compo.component.scss']
})
export class CaratEmpleCompoComponent implements OnInit{

  @Output() caractEmple = new EventEmitter<string>();

   constructor(private serCaracter: ServicioEmpleadoService){}

  ngOnInit(): void {
      
  }

  addNewItem(value: string){
    this.serCaracter.popop(value)
    this.caractEmple.emit(value);
  }

}
