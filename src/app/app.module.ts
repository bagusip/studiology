import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from '@angular/fire';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from './../pages/register/register';
import { MenuPage } from './../pages/menu/menu'
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ProfilePage } from './../pages/profile/profile';
import { FindstudioPage } from './../pages/findstudio/findstudio';
import { SchedulePage } from './../pages/schedule/schedule';
import { AboutusPage } from './../pages/aboutus/aboutus';


import { HttpModule } from '@angular/http'
import { AngularFireAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    MenuPage,
    ProfilePage,
    FindstudioPage,
    SchedulePage,
    AboutusPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    MenuPage,
    ProfilePage,
    FindstudioPage,
    SchedulePage,
    AboutusPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
