import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

@Injectable()
export class BookingService {

  constructor(private db: AngularFireDatabase) {}
  get (): AngularFireObject<any[]>{
    return this.db.object('/booking');
    } 
}  