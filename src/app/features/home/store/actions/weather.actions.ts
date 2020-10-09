import { Action } from "@ngrx/store";

export enum WeatherActionTypes {
  Load = "[ Weather] Load",
  LoadSuccess = "[Weather] Load Success",
  LoadFail = "[Weather] Load Fail",
}

/************** Load: NGRX Actions to load **************/
export class Load implements Action {
  readonly type = WeatherActionTypes.Load;

  constructor(public payload: any) {}
}

export class LoadSuccess implements Action {
  readonly type = WeatherActionTypes.LoadSuccess;

  constructor(public payload: any) {}
}

export class LoadFail implements Action {
  readonly type = WeatherActionTypes.LoadFail;

  constructor(public payload: string) {}
}

// Union the valid types
export type WeatherActions = Load | LoadFail | LoadSuccess;
