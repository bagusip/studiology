import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { file } from '@ionic-native/file/ngx';  

/**
 * Generated class for the FindstudioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-findstudio',
  templateUrl: 'findstudio.html',
})
export class FindstudioPage {
  lat: any;
  lng: any;
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  start = '';
  end = '';
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  data:string = '';

  constructor(public platform : Platform, public navCtrl: NavController, public navParams: NavParams,private geolocation: Geolocation) {
  }

  locate(){
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude,resp.coords.longitude);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
  

  ionViewDidLoad(){
    // this.obtainPosition();
    this.initMap();
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,
      center: {lat: 41.85, lng: -87.65}
    });

    this.directionsDisplay.setMap(this.map);
  }

  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }




}
