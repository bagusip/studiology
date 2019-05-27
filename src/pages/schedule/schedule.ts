import { MenuPage } from './../menu/menu';
import { Component } from '@angular/core';
import  { ToastController,IonicPage, NavController, NavParams, LoadingController, AlertController,} from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import firebase from 'firebase';
import { BookProvider } from '../../providers/booking';
import { ServiceListProvider } from '../../providers/service-list';
import { Values } from '../../providers/values';
import { DataProvider } from '../../providers/data';
import { DatePicker } from '@ionic-native/date-picker';
import { Keyboard } from '@ionic-native/keyboard';

/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  userProfiles: any;
  form: any;
  errorMessage: any;
  disableSubmit: boolean = false;
  currentUser: any;
  public phoneBind;
  public fullnameBind;
  public addressBind;
  public userProfile: any;
  public user;
  appointDate : any;
  serviceList: any;
  contat: any;

  constructor(public toastController : ToastController, public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public bookProvider: BookProvider, public alertCtrl: AlertController, 
    public loadingCtrl: LoadingController, public serviceListProvider: ServiceListProvider, public values:Values,  
    public dataProvider: DataProvider, public nav: NavController)  {

    this.form = {};
    this.currentUser = firebase.auth().currentUser;  
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
   if (user) {
    this.user = true;
    unsubscribe();
   } 
 });

 this.serviceListProvider.getService().on('value', snapshot => {
  this.serviceList = [];
  snapshot.forEach( snap => {
    this.serviceList.push({
      id: snap.key,
      name: snap.val().name
    });

  });

 });
}  

succesRegister = this.toastController.create({
  message:"Pemesanan Berhasil",
  duration:2000
});

stringGen(len){
  var text = " ";
  var charset = "abcdefghijklmnopqrstuvwxyz0123456789";
  for( var i=0; i < len; i++ )
      text += charset.charAt(Math.floor(Math.random() * charset.length));
  return text;
}

sumitbooking(form, bookingId){
  let bookingNumber = this.stringGen(10);
  let status = "pending";
  let comment = "Thank you, we have received your booking";
  let userID = firebase.auth().currentUser.uid;
  this.bookProvider.submitbook( this.form.name, this.form.email, this.form.phone , this.form.appointDate , this.form.time).then(()=>{
   this.userProfiles
   this.navCtrl.setRoot(MenuPage);
 });

}

// This is the Navigate function to LoginPage
goLogin(){
  this.navCtrl.push('LoginPage');
}

// This is the Navigate function to SignupPage
goSignup(){
  this.navCtrl.push('SignupPage');
}



}
