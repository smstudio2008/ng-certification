import { IForecastModel } from './../../models/weather-model';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'forecast-table-list',
  templateUrl: './forecast-table-list.component.html',
  styleUrls: ['./forecast-table-list.component.css']
})
export class ForecastTableListComponent implements OnInit {
  @Input() public forecastResult: Observable<IForecastModel>;
  constructor() { }

  ngOnInit(): void {
  }

}
