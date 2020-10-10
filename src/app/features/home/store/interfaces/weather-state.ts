import { IForecastModel, IWeatherModel } from "./../../models/weather-model";

export interface IWeatherState {
    weather: IWeatherModel[];
    forecast: IForecastModel[];
}
