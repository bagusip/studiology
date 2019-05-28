import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import {  AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Booking } from '../../models/booking';
import { BookingService } from '../../providers/booking.service';

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  bookingListRef$: AngularFireObject<Booking[]>

  constructor(private bookingService : BookingService, private database : AngularFireDatabase , private afAuth : AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    this.bookingListRef$ = this.database.object('/booking/');
    this.bookingListRef$.valueChanges().subscribe(item => console.log(item));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

  


  
  logout(){
    this.signOut();
    this.navCtrl.setRoot(LoginPage);
  }

  signOut(): Promise<void>{
    return this.afAuth.auth.signOut();
  }

}
