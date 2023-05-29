import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import firebase from 'firebase/compat/app'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDKZW5FtRyPA6wriiE45mJYXMbOnnYSyqQ",
      authDomain: "https://testing2358-e1e5c-default-rtdb.firebaseio.com"
    })
  }


}
