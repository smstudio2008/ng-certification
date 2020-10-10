import { getWeather } from "./../../store/selector/weather.selector";
import { IWeatherModel } from "./../../models/weather-model";
import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";

import { IAppWeatherState } from "../../store/interfaces/app.weather-state";
import * as weatherActions from "../../store/actions/weather.actions";
import { Observable } from "rxjs";

@Component({
  selector: "app-weather-view",
  templateUrl: "./weather-view.component.html",
  styleUrls: ["./weather-view.component.css"],
})
export class WeatherViewComponent implements OnInit {
  constructor(private store: Store<IAppWeatherState>) {}

  public weatherData: Observable<IWeatherModel[]> = this.store.pipe(
    select(getWeather)
  );

  ngOnInit(): void {}

  public getWeatherDatafromStore(data: number) {
    this.store.dispatch(new weatherActions.LoadWeather(data));
  }

  public deleteWeatherDatafromStore(data: IWeatherModel) {
    console.log(data)
    this.store.dispatch(new weatherActions.DeleteWeather(data));
  }
}
