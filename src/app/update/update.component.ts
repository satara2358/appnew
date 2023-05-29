import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpleadoService } from '../service/servicio-empleado.service';
import { EmpleService } from '../service/empleado.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit{

  constructor(private router:Router, private route:ActivatedRoute, private serviceemple: EmpleService){}

  algo: string =''
  inApelli:string=''
  incargo:string=''
  insalario:number=0
  title = 'Listado de Empleados'
  empleados : Empleado[]=[]
  indice:number
  accion: number

  Updatempleado(){
    
    if(this.accion==1){
      let empleNew = new Empleado(this.algo,this.inApelli, this.incargo, this.insalario);
    //this.services.popop("empleeado llamado : "+empleNew.nombre);
      this.serviceemple.update(this.indice, empleNew)
      this.router.navigate([""]);
    }else{
      this.serviceemple.Delette(this.indice)
      this.router.navigate([""])
    }
  }
  // Delette(){
  //   this.serviceemple.Delette(this.indice)
  //   this.router.navigate([""]);
  // }

  ngOnInit(){
    this.empleados = this.serviceemple.empleadosSer;
    this.indice = this.route.snapshot.params['id'];
    let empleaIndex:Empleado = this.serviceemple.searchEmpleado(this.indice);
    this.algo= empleaIndex.nombre;
    this.inApelli = empleaIndex.apellido;
    this.incargo= empleaIndex.cargo;
    this.insalario=empleaIndex.salario;
    this.accion=parseInt(this.route.snapshot.queryParams['action'])
  }
}
