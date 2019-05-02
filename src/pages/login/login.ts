import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import { MenuPage } from '../menu/menu';

import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private afAuth : AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

async login(user: User){
  console.log(this.user);
  try {
    const result = this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
    
    if (result) {
      this.navCtrl.setRoot(MenuPage);
    }  
  }
  catch (e) {
    console.error(e);
}
  // this.navCtrl.setRoot(MenuPage);
}

  register(){
    this.navCtrl.setRoot(RegisterPage);
  }
  
}
