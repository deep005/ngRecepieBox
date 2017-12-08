import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature: string = 'recipe';

  onNavigate(data: string){
     this.loadedFeature = data;
  }
  ngOnInit(){
    firebase.initializeApp(
      {apiKey: "AIzaSyA1PDUg3WZkLhqpHgjW2G9ys3BUwIx3gdY",
      authDomain: "ng-recipe-book-1ce3e.firebaseapp.com"}
    );
  }

}
