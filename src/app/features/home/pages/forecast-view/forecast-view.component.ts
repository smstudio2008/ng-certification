import { IForecastModel } from './../../models/weather-model';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { IAppWeatherState } from "../../store/interfaces/app.weather-state";
import * as forecastActions from "../../store/actions/weather.actions";
import { Observable } from 'rxjs';
import { getForcast } from '../../store/selector/weather.selector';

@Component({
  selector: "forecast-view",
  templateUrl: "./forecast-view.component.html",
  styleUrls: ["./forecast-view.component.css"],
})
export class ForecastViewComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private store: Store<IAppWeatherState>
  ) { }

  public forecastData: Observable<IForecastModel[]> = this.store.pipe(
    select(getForcast)
  );

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      this.store.dispatch(
        new forecastActions.LoadForecast(paramMap.get("zipCode"))
      );
    });
  }
}
