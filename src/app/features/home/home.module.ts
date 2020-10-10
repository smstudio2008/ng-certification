import { HttpClientModule } from '@angular/common/http';
import { WeatherEffects } from './store/effects/weather.effects';
import { EffectsModule } from '@ngrx/effects';
import { HomeRoutingModule } from "./routes/home-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ForecastViewComponent } from "./pages/forecast-view/forecast-view.component";
import { HomeViewComponent } from "./pages/home-view/home-view.component";
import { WeatherSearchFormComponent } from "./components/weather-search-form/weather-search-form.component";
import { WeatherSearchResultComponent } from "./components/weather-search-result/weather-search-result.component";
import { ForecastTableListComponent } from "./components/forecast-table-list/forecast-table-list.component";
import { WeatherViewComponent } from "./pages/weather-view/weather-view.component";
import { StoreModule } from "@ngrx/store";

import { weatherReducer } from './store/reducer/weather.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ForecastViewComponent,
    HomeViewComponent,
    WeatherSearchFormComponent,
    WeatherSearchResultComponent,
    ForecastTableListComponent,
    WeatherViewComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    StoreModule.forFeature("weather", weatherReducer),
    EffectsModule.forFeature([WeatherEffects]),
  ],
})
export class HomeModule {}
