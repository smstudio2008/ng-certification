import { WeatherActions} from '../actions/weather.actions';
import { IWeatherState } from './../interfaces/weather-state';


export const initialState: IWeatherState = {
    weather: [],
};

export function weatherReducer(state = initialState, action: WeatherActions): IWeatherState {
    switch (action.type) {
        // case weatherActionTypes.LoadSuccess:
        //     return {
        //         ...state,
        //         weather: action.payload.weather,
        //         total: action.payload.total,
        //     };

        // case weatherActionTypes.LoadFail:
        //     return {
        //         ...state,
        //         weather: [],
        //         total: null,
        //         error: action.payload,
        //     };
        default:
            return state;
    }
}
