import { AdminPage } from './../admin/admin';
import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { User } from '../../models/user';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import { MenuPage } from '../menu/menu';

import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private alertCtrl: AlertController, public loadingCtrl: LoadingController, private toastController : ToastController, private afAuth : AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
}

  failedLogin = this.toastController.create({
    message:"Login Tidak Berhasil",
    duration:2000
  });

async login(user: User){
  var loader = this.loadingCtrl.create({
          content: "Please wait..."
        });
// loader.present();
  console.log(this.user);

  if(this.user.email == "admin@admin.com" && this.user.password == "admin123"){
      console.log("admin masuk");
      this.alert('Welcome Admin');
      this.navCtrl.setRoot(AdminPage);
  }
  else{
    this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
    .then( data => {
      console.log('got some data', this.afAuth.auth.currentUser);
      this.alert('Success! You\'re logged in');
      this.navCtrl.setRoot(MenuPage);
    })
    .catch(error =>{
      console.log('got an error', error);
      this.alert(error.message);
    })
    console.log('would sign in with',this.user.email,this.user.password);
  }
}

  register(){
    this.navCtrl.setRoot(RegisterPage);
  }

}
