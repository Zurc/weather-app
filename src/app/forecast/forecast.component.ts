import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Forecast } from '../forecast';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  myForecast: Forecast[] = [];

  constructor(private ws: WeatherService) { }

  ngOnInit() {
    this.myForecast = this.ws.getForecast();
  }

}
