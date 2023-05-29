import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button [ngStyle]="{'background-color':color}">{{label}}</button>
  <p>Counter: {{conunterRender()}}</p>`,
  // templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit, OnChanges, OnDestroy{
  @Input() color!:string;
  @Input() label!:string;
  @Input() selection!:string;

  constructor(){}

  ngOnInit(): void {
      console.log('OnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log('Changes ->', changes);
  }
  ngOnDestroy(): void {
      console.log('OnDestroy');
  }
  conunterRender():boolean{
    console.log('Render Form');
    return true;
  }
}
