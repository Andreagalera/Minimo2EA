import { Injectable } from '@angular/core';
import { Bike } from '../models/bike';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  selectedBike: Bike;
  bikes: Bike[];
  readonly URL_API = 'http://localhost:3000/api/bikes';


  constructor(private http: HttpClient) {
    this.selectedBike = new Bike;
  }
  getBikes():Observable<Bike[]>{
    return this.http.get<Bike[]>(this.URL_API);
  }
}
