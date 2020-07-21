import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Debt } from '../models/debt';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class DebtTableService {
  private debtColection: AngularFirestoreCollection<Debt>

  constructor(private readonly afs: AngularFirestore) {
    this.debtColection = afs.collection<Debt>('debt')
   }

   get_all_debts(): Observable<Debt[]> {
     return this.afs.collection<Debt>('debt').valueChanges();
   }

   persist_debt(debtor: string, decription: string): Promise<void> {
    const id = this.afs.createId();
    const date = firebase.firestore.Timestamp.fromDate(new Date());
    const debt: Debt = { id, date, decription, debtor}
    return this.debtColection.doc(id).set(debt);
   }

   update_debt(debtor: string, decription: string, id: string): Promise<void> {
    const date = firebase.firestore.Timestamp.fromDate(new Date());
    const debt: Debt = { id, date, decription, debtor}
    return this.debtColection.doc(id).update(debt);
   }

   delete_debt(id: string): Promise<void> {
    return this.debtColection.doc(id).delete();
   }
}
