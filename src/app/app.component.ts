import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'masterthesis';

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyC1WR9E1IPqWeU3_cxGJM3NwACVTOlq9i0',
      authDomain: 'thesis-a7012.firebaseapp.com'
  });
  }
}
