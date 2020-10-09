import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { IForecastModel, IWeatherModel } from './../models/weather-model';

@Injectable({
    providedIn: "root",
})

export class WeatherService {
    private readonly WEATHER_URL: string = "https://api.openweathermap.org/data/2.5";
    private readonly OPEN_WEATHER_ID_API: string = "5a4b2d457ecbef9eb2a71e480b947604";
    private readonly DEFAULT_FORECAST_DAYS: number = 5;

    constructor(private http: HttpClient) { }

    public getWeatherFromZipCode(zipCodeValue: number): Observable<IWeatherModel> {

        let paramsUrl = new HttpParams();
        paramsUrl = paramsUrl.set('appid', this.OPEN_WEATHER_ID_API);
        paramsUrl = paramsUrl.set('zip', zipCodeValue.toString());

        return this.http.get<IWeatherModel>(`${this.WEATHER_URL}/weather`, { params: paramsUrl }).pipe(
            map((data) => {
                return data;
            }),
            catchError(this.handleError),
        );
    }

    public getForecastFromZipCode(zipCodeValue: number): Observable<IForecastModel> {

        let paramsUrl = new HttpParams();
        paramsUrl = paramsUrl.set('appid', this.OPEN_WEATHER_ID_API);
        paramsUrl = paramsUrl.set('zip', zipCodeValue.toString());
        paramsUrl = paramsUrl.set('cnt', this.DEFAULT_FORECAST_DAYS.toString());

        return this.http.get<IForecastModel>(`${this.WEATHER_URL}/forecast/daily`, { params: paramsUrl }).pipe(
            map((data) => {
                return data;
            }),
            catchError(this.handleError),
        );
    }

    private handleError(err) {
        let errorMessage: string;

        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }

        return throwError(errorMessage);
    }
}
