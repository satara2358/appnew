import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth'

@Injectable()
export class LoginService{
  constructor(private router:Router){

  }
  token: string
  login(email: string, passw: string){
    firebase.auth().signInWithEmailAndPassword(email, passw).then(
      response => {
        firebase.auth().currentUser?.getIdToken().then(
          token => {
            this.token=token;
            this.router.navigate(['/']);
          }
        )
      }
    )
  };
  getIdToken(){
    return this.token;
  }
}

