import { WeatherActions, WeatherActionTypes } from "../actions/weather.actions";
import { IWeatherState } from "./../interfaces/weather-state";

export const initialState: IWeatherState = {
    weather: [],
    forecast: []
};

export function weatherReducer(
    state = initialState,
    action: WeatherActions
): IWeatherState {
    switch (action.type) {
        case WeatherActionTypes.LoadWeatherSuccess:
            return {
                ...state,
                weather: [...state.weather, action.payload],
            };

        case WeatherActionTypes.LoadWeatherFail:
            return {
                ...state,
                weather: [],
            };

        case WeatherActionTypes.LoadForecastSuccess:
            return {
                ...state,
                forecast: [...[action.payload]],
            };

        case WeatherActionTypes.LoadForecastFail:
            return {
                ...state,
                forecast: [],
            };

        case WeatherActionTypes.DeleteWeatherData:
            console.log(action);
            return {
                ...state,
                weather: state.weather.filter((product) => product !== action.payload),
            };

        default:
            return state;
    }
}
