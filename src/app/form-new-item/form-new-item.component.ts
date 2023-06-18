import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormNewItemComponent {
  @Input() className = 'btn-primary';
  @Input() label!: string;
  @Input() selection!: City;

  @Output() newItemEvent = new EventEmitter<string>();
  @Output() updateItemEvent = new EventEmitter<City>();

  onAddNewItem(item: any):void{
    this.newItemEvent.emit(item);
    console.log('Item ->', item);
  }

  conunterRender():boolean{
    console.log('Render Form');
    return true;
  }

  onUpdateItem(item: any, change: string): void{
    const cuidad: City = {
      _id: item._id,
      name:change
    };
    this.updateItemEvent.emit(cuidad);
  }

}
