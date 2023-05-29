import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "../empleado.model";
import { LoginService } from "../login/serviceLogin";


@Injectable()


export class DataServices{
  constructor(private httpClient:HttpClient, private loginSer:LoginService ){
  }

  loadEmpleados(){
    const token = this.loginSer.getIdToken();
    return this.httpClient.get('https://testing2358-e1e5c-default-rtdb.firebaseio.com/datos.json?auth='+token);
  }

  saveEmpleados(empleSaved:Empleado[]){
    // this.httpClient.post('https://testing2358-e1e5c-default-rtdb.firebaseio.com/datos.json',empleSaved).subscribe(
    //   response => console.log('Exito'+ response),
    //   error => console.log('error' + error),
    //   );
    this.httpClient.put('https://testing2358-e1e5c-default-rtdb.firebaseio.com/datos.json',empleSaved).subscribe(
      response => console.log('Exito'+ response),
      error => console.log('error' + error),
      );
  }

  updateEmpleado(indice:number, empleaUp:Empleado){
    let url ='https://testing2358-e1e5c-default-rtdb.firebaseio.com/datos/'+ indice +'.json';
    this.httpClient.put(url,empleaUp).subscribe(
      response => console.log("okok "+ response),
      error => console.log("error" + error),

    )
  }
  Delette(indice:number){
    let url ='https://testing2358-e1e5c-default-rtdb.firebaseio.com/datos/'+indice+'.json';
    this.httpClient.delete(url).subscribe(
      response => console.log("Eliminado "+ response),
      error => console.log("error" + error),
    )
  }
}
