import { City, DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleService } from '../service/empleado.service';



@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit{
  cities: City[] = [];
  selection!: City;
  criteria ='';

  constructor(private serviceemple: EmpleService, private readonly datesvc: DataService) {}

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
    this.datesvc.getCities()
      .subscribe( citiess => {
        this.cities = [...citiess];
    })
    this.serviceemple.getEmpleados().subscribe(OnlineEmplea => {
      console.log(OnlineEmplea);
      this.empleadosH = Object.values(OnlineEmplea);
      this.serviceemple.setEmpleados(this.empleadosH);
    });
  }

  updateCity(city: City): void{
    this.datesvc.updateCity(city).subscribe(res => {
      const temarr = this.cities.filter(i => i._id !== city._id);
      this.cities = [...temarr, city]
      this.onClear()
    })
  }
  addNewCity(city: string): void{
    this.datesvc.addNewCity(city).subscribe(res => {
      this.cities.push(res);
    })
  }
  onCitySelected(city: City): void{
    this.selection = city;
  }
  onClear(): void{
    this.selection={
      _id: '',
      name: ''
    };
  }
  onCityDelete(id: string): void{
    if(confirm('seguro?')){
      this.datesvc.deleteCity(id).subscribe(() => {
        const temarr = this.cities.filter(city => city._id !== id);
        this.cities = [...temarr]
        this.onClear();
      })
    }
  }
}

