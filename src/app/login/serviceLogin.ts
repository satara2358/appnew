import { CookieService } from 'ngx-cookie-service';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth'

@Injectable()
export class LoginService{
  constructor(private router:Router, private cookie:CookieService){

  }
  token: string
  login(email: string, passw: string){
    firebase.auth().signInWithEmailAndPassword(email, passw).then(
      response => {
        firebase.auth().currentUser?.getIdToken().then(
          token => {
            this.token=token;
            this.cookie.set("cookieTemporal", this.token)
            this.router.navigate(['/']);
          }
        )
      }
    )
  };
  getIdToken(){
    return this.cookie.get("cookieTemporal");
  }
  logeado(){
    return this.cookie.get("cookieTemporal");
  }
  logout(){
    firebase.auth().signOut().then(()=>{
      this.token="";
      this.cookie.set("cookieTemporal", this.token)
      this.router.navigate(['/']);
      window.location.reload()
    })
  }
}

