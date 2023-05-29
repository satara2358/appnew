import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadoService {

  constructor() { }

  popop(mensaje:string){
    alert(mensaje)
  }
}
