import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormNewItemComponent {

  @Output() newItemEvent = new EventEmitter<string>();

  onAddNewItem(item: string):void{
    this.newItemEvent.emit(item)
    console.log('Item ->', item);
  }
  @Input() className ='btn-primary' ;
  @Input() label!: string ;

  conunterRender():boolean{
    console.log('Render Form');
    return true;
  }

}
