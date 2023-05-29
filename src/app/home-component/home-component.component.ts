import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleService } from '../service/empleado.service';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent {
  cities = ['Pasto', 'Cali', 'Bogota', 'Madrid'];
  name!: string;
  selection!: string;
  criteria ='';

  constructor(private serviceemple: EmpleService) {}

  algo: string =''
  inApelli:string=''
  incargo:string=''
  insalario:number=0
  title = 'Listado de Empleados';
  empleadosH : Empleado[]=[];

  // addempleado(){
  //   let empleNew = new Empleado(this.algo,this.inApelli, this.incargo, this.insalario);
  //   //this.services.popop("empleeado llamado : "+empleNew.nombre);
  //   this.serviceemple.addemplea(empleNew);
  // }
  ngOnInit(): void {
    this.serviceemple.getEmpleados().subscribe(OnlineEmplea => {
      console.log(OnlineEmplea);
      this.empleadosH = Object.values(OnlineEmplea);
      this.serviceemple.setEmpleados(this.empleadosH);
    });
  }

  addNewCity(city: string): void{
    this.cities.push(city);
  }

  onCityClicked(city: string): void{
    this.selection = city;
  }
  onClear(): void{
    this.selection= '';
  }
}

