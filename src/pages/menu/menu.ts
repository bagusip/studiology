import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { ProfilePage } from '../profile/profile';
import { FindstudioPage } from '../findstudio/findstudio';
import { AboutusPage } from '../aboutus/aboutus';
import { SchedulePage } from '../schedule/schedule';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(private afAuth : AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  profile(){
    this.navCtrl.push(ProfilePage);
  }
  
  findstudio(){
    this.navCtrl.push(FindstudioPage);
  }

  schedule(){
    this.navCtrl.push(SchedulePage);
  }

  aboutus(){
    this.navCtrl.push(AboutusPage);
  }

  logout(){
    this.signOut();
    this.navCtrl.setRoot(LoginPage);
  }

  signOut(): Promise<void>{
    return this.afAuth.auth.signOut();
  }

}
