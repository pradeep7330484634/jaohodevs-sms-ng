import { Component, OnInit, ViewChild } from '@angular/core';

declare var google: any;
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: any;
  constructor() {
    this.map = google.maps.Map
  }
  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    let drag = ev.dataTransfer.setData("text", ev.target.id);
    console.log(drag);

  }
  ngOnInit() {
    // var mapProp = {
    //   center: new google.maps.LatLng(17.4447, 78.4664),
    //   zoom: 15,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // };
    // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    // if (navigator.geolocation) {
    //   // this.isTracking = true;
    //   navigator.geolocation.watchPosition((position) => {
    //   console.log(position.coords.latitude);
    //   });
    // } 
  }

}
