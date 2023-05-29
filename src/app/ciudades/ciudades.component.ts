import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ciudades',
  template: `<ul>
  <li (click)="onCityClicked(city)"
    [ngClass]="{'alert alert-info': city === selection}">
    {{city | titlecase}}
  </li>
</ul>
<p>Counter: {{conunterRender()}}</p>` ,
  styleUrls: ['./ciudades.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CiudadesComponent {

  @Input() city:string
  @Input() selection:string

  @Output() cityClickedEvent = new EventEmitter<string>();

  onCityClicked(city:string):void{
    this.cityClickedEvent.emit(city);
  }
  conunterRender():boolean{
    console.log('Render Form');
    return true;
  }
}
