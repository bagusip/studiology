import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent {

  @ViewChild("map") mapElement;
  map:any;
  
  constructor() {
    
  }

  ionViewDidLoad(){
 
}
}