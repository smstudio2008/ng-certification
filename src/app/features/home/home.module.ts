import { HomeRoutingModule } from './routes/home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastViewComponent } from './pages/forecast-view/forecast-view.component';
import { HomeViewComponent } from './pages/home-view/home-view.component';
import { WeatherSearchFormComponent } from './components/weather-search-form/weather-search-form.component';
import { WeatherSearchResultComponent } from './components/weather-search-result/weather-search-result.component';
import { ForecastTableListComponent } from './components/forecast-table-list/forecast-table-list.component';
import { WeatherViewComponent } from './pages/weather-view/weather-view.component';

@NgModule({
  declarations: [ForecastViewComponent, HomeViewComponent, WeatherSearchFormComponent, WeatherSearchResultComponent, ForecastTableListComponent, WeatherViewComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
