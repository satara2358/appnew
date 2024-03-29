import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private readonly router: Router){

  }
  gotoReactive(){
    this.router.navigate(['contact-reactive'], {queryParams: {name: 'rutaLinkOculta'}})
  }
  goToTemplate(){
    this.router.navigate(['contact-template','580'])
  }

}
