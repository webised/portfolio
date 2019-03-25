import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { Work } from '../models/work.model';
import {AngularFireDatabase} from '@angular/fire/database';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  works: Work[];

  constructor( private firestore: AngularFirestore ) {};

  /*getWorks1() {
    return this.db.list('works').valueChanges();
  }*/

  /*getWorks2(): Observable {
     firebase.database().ref('works').on('value', (data: DataSnapshot) => {
       return Observable.of(data.val());
     });
  }*/

  getWorks() {
    return this.firestore.collection('/works').snapshotChanges();
  }
}
