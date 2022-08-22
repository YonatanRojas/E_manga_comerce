import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, } from '@angular/fire/compat/firestore';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection, addDoc, doc, deleteDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import Place from './interface/place.interface';

export interface Item { name: string; }

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private firestore: Firestore ) { }

  addProduct(place : Place){
    const productColect =  collection(this.firestore, 'places')
    return addDoc(productColect, place)
  }

  getProduct(): Observable<Place[]>{
    const productColect =  collection(this.firestore, 'places');
    return collectionData(productColect, { idField: 'id'}) as Observable<Place[]>;
  }
/*
  deleteProduct(place: Place){
    const productColectRef = doc(this.firestore, `places/${place.id}`);
    return deleteDoc(productColectRef);
  }
*/
}
