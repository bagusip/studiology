import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Component } from '@angular/core';
import { AlertController,IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginPage } from '../login/login' ;
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;
  public users: any;
  public fireRef: any;


  constructor(afDatabase : AngularFireDatabase, private alertCtrl: AlertController,private toastController : ToastController,public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
    this.users = firebase.database().ref('/user');
    this.fireRef = firebase.database().ref();
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
   this.submituser(this.user.first_name,this.user.first_name,this.user.phone_number,this.user.email,this.user.password);
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

  submituser (first_name : string,
    last_name : string,
    phone_number : string,
    email : string,
    password : string){

    return this.users.push({
      first_name: first_name,
      last_name: last_name,
      phone_number: phone_number,
      email:email,
      password: password,
    }).then( newOrder => {
      this.users.child(newOrder.key).child('email').set(newOrder.key);
    });
  }

  cancel(){
    this.navCtrl.setRoot(LoginPage);
  }

}
