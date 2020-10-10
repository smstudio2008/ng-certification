import { IWeatherModel } from "./../../models/weather-model";
import { IWeatherState } from "./../interfaces/weather-state";
import { WeatherService } from "./../../services/weather.service";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import { catchError, map, mergeMap } from "rxjs/operators";

import * as weatherActions from "../actions/weather.actions";

@Injectable()
export class WeatherEffects {
    constructor(
        private actions$: Actions,
        private weatherService: WeatherService
    ) { }

    @Effect()
    loadweathers$: Observable<Action> = this.actions$.pipe(
        ofType(weatherActions.WeatherActionTypes.LoadWeather),
        map((actions: weatherActions.LoadWeather) => actions.payload),
        mergeMap((action: number) =>
            this.weatherService.getWeatherFromZipCode(action).pipe(
                map((data: IWeatherModel) => {
                    return new weatherActions.LoadWeatherSuccess({
                        ...data,
                        zipcode: action,
                    });
                }),
                catchError((err) => of(new weatherActions.LoadWeatherFail(err)))
            )
        )
    );

    @Effect()
    loadForecast$: Observable<Action> = this.actions$.pipe(
        ofType(weatherActions.WeatherActionTypes.LoadForecast),
        map((actions: weatherActions.LoadForecast) => actions.payload),
        mergeMap((action: number) =>
            this.weatherService.getForecastFromZipCode(action).pipe(
                map((data: any) => {
                    return new weatherActions.LoadForecastSuccess(data);
                }),
                catchError((err) => of(new weatherActions.LoadForecastFail(err)))
            )
        )
    );
}
