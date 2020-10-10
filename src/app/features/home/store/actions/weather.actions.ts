import { IWeatherModel } from "./../../models/weather-model";
import { Action } from "@ngrx/store";

export enum WeatherActionTypes {
  LoadWeather = "[ Weather] Load",
  LoadWeatherSuccess = "[Weather] Load Success",
  LoadWeatherFail = "[Weather] Load Fail",

  LoadForecast = "[Forecast] Load",
  LoadForecastSuccess = "[Forecast] Load Success",
  LoadForecastFail = "[Forecast] Load Fail",

  DeleteWeatherData = "[Weather] Delete Weather",
}

/************** Load: NGRX Actions to Load **************/
export class LoadWeather implements Action {
  readonly type = WeatherActionTypes.LoadWeather;

  constructor(public payload: any) {}
}

export class LoadWeatherSuccess implements Action {
  readonly type = WeatherActionTypes.LoadWeatherSuccess;

  constructor(public payload: any) {}
}

export class LoadWeatherFail implements Action {
  readonly type = WeatherActionTypes.LoadWeatherFail;

  constructor(public payload: string) {}
}

/************** Load: NGRX Actions to Load Forecast **************/
export class LoadForecast implements Action {
  readonly type = WeatherActionTypes.LoadForecast;

  constructor(public payload: any) {}
}

export class LoadForecastSuccess implements Action {
  readonly type = WeatherActionTypes.LoadForecastSuccess;

  constructor(public payload: any) {}
}

export class LoadForecastFail implements Action {
  readonly type = WeatherActionTypes.LoadForecastFail;

  constructor(public payload: string) {}
}

// /************** Delete: NGRX Actions to delete Weather **************/
export class DeleteWeather implements Action {
  readonly type = WeatherActionTypes.DeleteWeatherData;

  constructor(public payload: IWeatherModel) {}
}

// Union the valid types
export type WeatherActions =
  | LoadWeather
  | LoadWeatherFail
  | LoadWeatherSuccess
  | LoadForecast
  | LoadForecastFail
  | LoadForecastSuccess
  | DeleteWeather;
