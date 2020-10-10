import { IWeatherModel } from "./../../models/weather-model";
import { Observable } from "rxjs";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "weather-search-result",
  templateUrl: "./weather-search-result.component.html",
  styleUrls: ["./weather-search-result.component.css"],
})
export class WeatherSearchResultComponent implements OnInit {
  @Input() public searchResult: Observable<IWeatherModel>;
  @Output() public removeWeatherData = new EventEmitter<IWeatherModel>();
  
  constructor() { }

  ngOnInit(): void { }

  public removeWeather(weatherData: IWeatherModel) {
    this.removeWeatherData.emit(weatherData)
  }
}
