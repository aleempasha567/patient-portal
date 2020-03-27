import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../doctors.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public placeholder: string = 'Find the Nearest Doctor with Name, Specialty , procedure ,...';
  public keyword = 'specialty';
  public historyHeading: string = 'Recently selected';

  public doctersInfo = [];

  constructor(private docService: DoctorsService) { }

  ngOnInit() {
    this.docService.getEmployees().subscribe(data => {
      if(data) {
        this.doctersInfo = data;
      }
    })
  }

}
