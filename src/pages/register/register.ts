import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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

  constructor(private toastController : ToastController,public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  succesRegister = this.toastController.create({
    message:"Registrasi Berhasil",
    duration:2000
  });

  async register(user: User){
    try{
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(this.user.email,this.user.password);
    console.log(result);
    this.succesRegister.present();
    this.navCtrl.setRoot(LoginPage);
  }
  catch(e){
     console.error(e);
  }
  }

  cancel(){
    this.navCtrl.setRoot(LoginPage);
  }

}
