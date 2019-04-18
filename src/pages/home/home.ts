import { RegisterPage } from './../register/register';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash = true;


  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    setTimeout(() => this.splash = false, 4000);
  }

  toLoginPage(){
    this.navCtrl.setRoot(LoginPage);
  }

  toRegisterPage(){
    this.navCtrl.setRoot(RegisterPage);
  }

}
