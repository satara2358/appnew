import { Component } from '@angular/core';

@Component({
  selector: 'app-quienes-component',
  templateUrl: './quienes-component.component.html',
  styleUrls: ['./quienes-component.component.scss']
})
export class QuienesComponentComponent {

}
// Obtén el botón y el popover por su ID
var button = document.getElementById("myButton");
var popover = document.getElementById("myPopover");

// Agrega un evento de clic al botón para mostrar u ocultar el popover
