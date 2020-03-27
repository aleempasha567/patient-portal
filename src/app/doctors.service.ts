import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface doctorsInfo {
  data: []
}
@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<doctorsInfo[]>('../assets/data.json');
  }


}
