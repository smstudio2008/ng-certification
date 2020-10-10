import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";

import { HomeViewComponent } from "./../pages/home-view/home-view.component";
import { ForecastViewComponent } from "../pages/forecast-view/forecast-view.component";
import { WeatherViewComponent } from "../pages/weather-view/weather-view.component";

const routes: Routes = [
    {
        path: "",
        component: HomeViewComponent,
        children: [
            {
                path: "",
                component: WeatherViewComponent,
            },
            {
                path: "forecast/:zipCode",
                component: ForecastViewComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
