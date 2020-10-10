import { IWeatherState } from './../interfaces/weather-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Selector functions
const getInstrumentFeatureState = createFeatureSelector<IWeatherState>('weather');

export const getWeather = createSelector(getInstrumentFeatureState, (state) => state.weather);
export const getForcast = createSelector(getInstrumentFeatureState, (state) => state.forecast);
