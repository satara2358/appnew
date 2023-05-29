import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './serviceLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private loginService: LoginService){}

  login (form:NgForm){
    const email = form.value.email
    const pass = form.value.password
    this.loginService.login(email,pass)
  }

}
