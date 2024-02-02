import { Component,OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})




export class GoogleMapComponent implements OnInit {
  ngOnInit(): void {
    this.initMap();
  }

  initMap(): void {
    const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });

    // Add additional map features or markers as needed
  }
}
