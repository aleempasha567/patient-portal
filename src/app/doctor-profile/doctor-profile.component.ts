import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  public tab = 'doc_overview';

  public location_url = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyAzDa0JqMfO3N_mRv9pv0JlMkmleVG71lw&q=place_id:ChIJOSyMC2sruIcRKqwTw-2QMKc';

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }
}
