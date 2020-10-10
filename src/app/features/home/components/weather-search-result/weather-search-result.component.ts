import { Component, EventEmitter, Input, Output } from "@angular/core";

import { Observable } from "rxjs";

import { IWeatherModel } from "./../../models/weather-model";

@Component({
  selector: "weather-search-result",
  templateUrl: "./weather-search-result.component.html",
  styleUrls: ["./weather-search-result.component.css"],
})
export class WeatherSearchResultComponent {
  @Input() public searchResult: Observable<IWeatherModel>;
  @Output() public removeWeatherData = new EventEmitter<IWeatherModel>();

  public removeWeather(weatherData: IWeatherModel) {
    this.removeWeatherData.emit(weatherData);
  }
}
