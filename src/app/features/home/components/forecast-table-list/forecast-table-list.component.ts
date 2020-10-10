import { Component, Input } from "@angular/core";

import { Observable } from "rxjs";

import { IForecastModel } from "./../../models/weather-model";

@Component({
  selector: "forecast-table-list",
  templateUrl: "./forecast-table-list.component.html",
  styleUrls: ["./forecast-table-list.component.css"],
})
export class ForecastTableListComponent {
  @Input() public forecastResult: Observable<IForecastModel>;
}
