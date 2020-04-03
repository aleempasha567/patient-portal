import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  public selectedDate = moment()
    .startOf("day")
    .format();
  public dates = [];

  constructor() {}

  ngOnInit() {
    this._changeDisplayedWeek();
  }

  prevWeek() {
    this._changeDisplayedWeek(-7);
  }

  nextWeek = function() {
    this._changeDisplayedWeek(7);
  };

  _changeDisplayedWeek(daysToAdd = 0) {
    var selectedDate = moment(this.selectedDate).add(daysToAdd, "days");
    this.selectedDate = selectedDate.format();
    this.dates = this._expandWeek(this.selectedDate);
  }

  _expandWeek(startDate) {
    var dates = [];
    var dayOfWeek = moment(startDate);
    for (var i = 0; i < 7; i++) {
      dates.push({
        weekDay: dayOfWeek.format("ddd").toUpperCase(),
        shortDate: dayOfWeek.format("DD MMM").toUpperCase(),
        year: dayOfWeek.format("YYYY"),
        date: dayOfWeek.format(),
        slots: 3 // here we need to get the count of avaialable slots
      });
      dayOfWeek.add(1, "d");
    }
    return dates;
  }
}
