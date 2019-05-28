import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

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


  locations = [
    ['Dream music studio', -6.239102, 106.645886, 4],
    ['Purwacaraka Music Studio', -6.276775, 106.664048, 5],
    ['37 Music Studio', -6.217771, 106.609262, 3],
    ['Rynd Music', -6.227464, 106.619964, 2],
    ['Aristi Music Studio',  -6.235849, 106.622285, 1],
    ['Gilang Ramadhan Studio Band',  -6.243375, 106.632288, 1],
  ];
    /*
  Dream music studio -6.239102, 106.645886
  Purwacaraka Music Studio -6.276775, 106.664048
  37 Music Studio -6.217771, 106.609262
  Rynd Music -6.227464, 106.619964
  Aristi Music Studio -6.235849, 106.622285
  Gilang Ramadhan Studio Band -6.243375, 106.632288
  */

  lat: any;
  lng: any;
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  start = '';
  end = '';

  
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;


  constructor(public platform : Platform, public navCtrl: NavController, public navParams: NavParams,private geo: Geolocation) {
  }
  

  ionViewDidLoad(){
    // this.obtainPosition();
    this.initMap();
  }

  obtainPosition(){
    this.geo.getCurrentPosition().then(pos=>{
      this.lat = pos.coords.latitude;
      console.log(pos.coords.latitude);
    }).catch( err => console.log(err));
  }


  initMap() {
    const map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 17,
      center: {lat: -6.25, lng: 106.61}
    });

    // const pos = {
    //   lat: -6.25,
    //   lng: this.lng
    // }

    // const icon = {
    //   url: 'assets/icon/favicon.ico', // image url
    //   scaledSize: new google.maps.Size(50, 50), // scaled size
    // };

    // const marker = new google.maps.Marker({
    //   position: pos,
    //   map: map,
    //   title: "hello world",
    //   icon: icon
    // });


    var infowindow = new google.maps.InfoWindow();


    var marker,i;
    

    for(i=0;i<this.locations.length;i++){
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(this.locations[i][1], this.locations[i][2]),
        map: map
      });
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(this.locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
    }
  


    // this.directionsDisplay.setMap(this.map);
  }




  // calculateAndDisplayRoute() {
  //   // this.directionsService.route({
  //   //   origin: this.start,
  //   //   destination: this.end,
  //   //   travelMode: 'DRIVING'
  //   // }, (response, status) => {
  //   //   if (status === 'OK') {
  //   //     this.directionsDisplay.setDirections(response);
  //   //   } else {
  //   //     window.alert('Directions request failed due to ' + status);
  //   //   }
  //   // });
  // }




