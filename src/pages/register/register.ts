import { Component } from '@angular/core';
import { AlertController,IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginPage } from '../login/login' ;

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(private alertCtrl: AlertController,private toastController : ToastController,public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  succesRegister = this.toastController.create({
    message:"Registrasi Berhasil",
    duration:2000
  });

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
}

  async register(user: User){
   
    this.afAuth.auth.createUserWithEmailAndPassword(this.user.email,this.user.password)
    .then(data => {
      console.log('got data ', data);
      this.alert('Registered!');
      this.navCtrl.setRoot(LoginPage);
    })
    .catch(error => {
      console.log('got an error ',error);
      this.alert(error.message);
    })
   console.log('Would register with ', this.user.email,this.user.password);
  }

  cancel(){
    this.navCtrl.setRoot(LoginPage);
  }

}
