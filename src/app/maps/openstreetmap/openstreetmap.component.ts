import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import * as ELG from "esri-leaflet-geocoder";

import { OpenStreetMapProvider } from 'leaflet-geosearch';

@Component({
  selector: 'app-openstreetmap',
  templateUrl: './openstreetmap.component.html',
  styleUrls: ['./openstreetmap.component.css']
})
export class OpenstreetmapComponent implements OnInit {
  private map;
  lat: number
  lng: number
  private marker
  mcText: string;
  cords = "";
  url: string;
  private provider = new OpenStreetMapProvider();
  private searchControl
  flas = false


  constructor() { }

  async ngOnInit(): Promise<void> {
    this.lat = 19.551221
    this.lng = -96.935521
    this.resertMap()

  }

  mapLoad(): void {
    this.map = L.map('mapid', {
      center: [this.lat, this.lng],
      zoom: 12
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
    this.marker = L.marker([this.lat, this.lng]).addTo(this.map);
    const popup = this.marker.bindPopup('<b>CRUM</b><br />Base.');

  }

  addMarker() {
    this.flas = false
    this.map.on("click", e => {
      this.map.removeLayer(this.marker)
      this.lat = e.latlng.lat
      this.lng = e.latlng.lng
      this.marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(this.map); // add the marker onclick
      this.cords = ''
      this.url = ''
    });
  }

  coords() {
    console.log(this.cords)
    this.cords = this.marker.getLatLng().lat + "," + this.marker.getLatLng().lng
    console.log(this.cords)
    this.url = 'https://maps.google.com/?q=' + this.cords
  }

  searchMap() {

    this.searchControl = new ELG.Geosearch({ autoCompleteDelay: 250}).addTo(this.map);
    const results = new L.LayerGroup().addTo(this.map);
    this.searchControl.on("results", (data) => {
      results.clearLayers();
      this.map.removeLayer(this.marker)
      this.cords = ""
      this.url = ""
      for (let i = data.results.length - 1; i >= 0; i--) {
        this.marker = L.marker((data.results[i].latlng)).addTo(this.map); // add the marker onclick

      }

    });

  }

  copyInputMessage(inputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

  Go() {
    window.open(this.url)
  }

  listMarkers() {
    this.marker = L.marker([19.53088643363966, -96.89775081026089]).addTo(this.map);
    this.marker.pu = L.marker([19.530464277380634, -96.89785269573261]).addTo(this.map);
    this.marker = L.marker([19.52995364378453, -96.90016403141593]).addTo(this.map);
    this.marker = L.marker([19.527627965404488, -96.89660277866642]).addTo(this.map);
  }

  cleanMarker() {
    this.cords = ''
    this.url = ''
    this.map.removeLayer(this.marker)
    this.map.remove()
    this.resertMap()
  }
  resertMap(){
    this.mapLoad();
    this.searchMap();
  }
}
