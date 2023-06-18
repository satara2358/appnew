import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-ciudades',
  template: `
  <ul class="list-group">
  <li (click)="onCitySelected(city)"
    class="list-group-item"
    [ngClass]="{'active': city._id === selection._id}">
    {{city.name | titlecase}}
    <div>
      <button
      *ngIf="city._id === selection._id"
      type="button"
      class="btn btn-danger float-end"
      (click)="onCityDelete(city._id)"
      >Delete</button>
    </div>
  </li>
</ul>
<p>Counter: {{conunterRender()}}</p>` ,
  styleUrls: ['./ciudades.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CiudadesComponent {

  @Input() city!:City
  @Input() selection!:City
  @Output() citySelectedEvent = new EventEmitter<City>();
  @Output() cityDeletedEvent = new EventEmitter<string>();

  conunterRender():boolean{
    console.log('Render Form');
    return true;
  }
  onCitySelected(city:City):void{
    this.citySelectedEvent.emit(city);
  }
  onCityDelete(id: string): void{
    this.cityDeletedEvent.emit(id);
  }
}
