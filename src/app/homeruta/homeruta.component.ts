import { LoginService } from './../login/serviceLogin';
import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app'

@Component({
  selector: 'app-homeruta',
  templateUrl: './homeruta.component.html',
  styleUrls: ['./homeruta.component.scss']
})
export class HomerutaComponent implements OnInit{

  constructor(private loginService: LoginService){

  }
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDKZW5FtRyPA6wriiE45mJYXMbOnnYSyqQ",
      authDomain: "https://testing2358-e1e5c-default-rtdb.firebaseio.com"
    })
  }

  loginIn(){
    return this.loginService.logeado();
  }
  logout(){
    return this.loginService.logout();
  }

}
