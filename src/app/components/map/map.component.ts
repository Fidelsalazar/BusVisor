import { Component } from '@angular/core';
import * as L from 'leaflet';




@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})


export class MapComponent {

  lat: number = 20.02083;
  lon: number = -75.82667;
  
  ngAfterViewInit(): void{

    const map  = L.map('map').setView([ this.lat, this.lon ], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	    maxZoom: 20,
	    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }
}
