import { IWeatherState } from './../interfaces/weather-state';
import { WeatherService } from './../../services/weather.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as weatherActions from '../actions/weather.actions';

@Injectable()
export class WeatherEffects {
    constructor(private actions$: Actions, private weatherService: WeatherService) {}

    @Effect()
    loadweathers$: Observable<Action> = this.actions$.pipe(
        ofType(weatherActions.WeatherActionTypes.Load),
        map((actions: weatherActions.Load) => actions.payload),
        mergeMap((action:number) =>
            this.weatherService.getWeatherFromZipCode(action).pipe(
                map((data: any) => {
                    return new weatherActions.LoadSuccess(data);
                }),
                catchError((err) => of(new weatherActions.LoadFail(err))),
            ),
        ),
    );
}