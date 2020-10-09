import { IWeatherModel } from './../../models/weather-model';
import * as fromRoot from "../../../../core/state/app.state";

interface State extends fromRoot.State {
    weather: IWeatherModel;
}

export { State as IAppWeatherState };
