import { Component, OnInit } from '@angular/core';
import { Station } from 'src/app/models/station';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.page.html',
  styleUrls: ['./stations.page.scss'],
})
export class StationsPage implements OnInit {
  stationsList: Station[] = [];
  constructor(private stationService: StationService) { }

  ngOnInit() {
    this.getStations();
  }
  getStations(){
    this.stationService.getStations()
      .subscribe(res => {
        this.stationsList= res;
        console.log(res);
      });
  }

}
