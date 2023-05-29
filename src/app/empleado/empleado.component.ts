import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template: `<p>empleado works!!!!</p>`,
  //styleUrls: ['./empleado.component.scss']
  styles:['p{background-color: alpha($color:red);}']
})
export class EmpleadoComponent {
  nombre='coco'  
  edad = 54
  textRegis = ''
  usuRegistrado = false
  empresa= 'Sara'
  setUserR(event: Event){
    if((<HTMLInputElement>event.target).value =='si'){
      this.textRegis='Si registrado';
    }else{
      this.textRegis = 'no Resgistro'
    }
  }

  constructor(){

  }
  OnInit(){

  }

}
