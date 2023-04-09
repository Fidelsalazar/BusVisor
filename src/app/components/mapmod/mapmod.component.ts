import { Component, OnInit } from '@angular/core';
import * as LM from 'leaflet';

// when the docs use an import:
declare const L: any; // --> Works
import 'leaflet-draw';


const markerIcon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  // specify the path here
  iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-shadow.png"
});
L.Marker.prototype.options.icon = markerIcon;

@Component({
  selector: 'app-mapmod',
  templateUrl: './mapmod.component.html',
  styleUrls: ['./mapmod.component.css']
})

export class MapmodComponent implements OnInit{
  
  map: any;
  lat: number = -22.9035;
  lon: number = -43.2096;
  maker: L.Marker<any> | undefined;
  dbmaker: L.Marker<any>[] | undefined;
  
  markers: any[]| undefined;
  drawnItems: any;
  
  datachild: any;
  isAddFieldTask: boolean| undefined;
  isSave: boolean| undefined;


  constructor(
  ){
    
  }
  ngOnInit(): void {
    this.map = L.map('map',).setView([this.lat, this.lon], 13);
 
    LM.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	    maxZoom: 20,
	    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    
    

    this.drawnItems = new LM.FeatureGroup();

    this.map.addLayer(this.drawnItems);

    var options = {
      position: 'topleft',
      draw: {
        circle: false,
        circlemarker: false,// Turns off this drawing tool
        marker:
        {

          icon: markerIcon

        }
      },
      edit: {
        featureGroup: this.drawnItems, 
      }

    };

    var drawControl = new L.Control.Draw(options);
    this.map.addControl(drawControl);

    var app = this;
    this.map.on(L.Draw.Event.CREATED, function (e:any) {
      var type = e.layerType,
        layer = e.layer;

      if (type === 'marker') {
        layer.bindPopup('A popup!');
        console.log(layer.getLatLng());
      }
      else {
        console.log(layer.getLatLngs());
      }
      app.drawnItems.addLayer(layer);

    });

  }

 

}
