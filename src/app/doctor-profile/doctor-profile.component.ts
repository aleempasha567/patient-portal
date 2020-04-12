import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  public tab = 'doc_overview';

  public location_url = '';

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }
}
