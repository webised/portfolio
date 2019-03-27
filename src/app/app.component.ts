import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import { environement } from './environement';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    firebase.initializeApp(environement);
  }
}
