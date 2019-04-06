import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Forecast } from '../forecast';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  cityForecast: Forecast[] = [];

  constructor(private ws: WeatherService) { }

  ngOnInit() {
    this.ws.getForecast('London')
      .subscribe((data) => {
        for (let i = 3; i < data.list.length; i += 8) {
          const temporary = new Forecast(data.list[i].dt_txt,
                                        data.list[i].weather[0].icon,
                                        data.list[i].main.temp_max,
                                        data.list[i].main.temp_min);
          this.cityForecast.push(temporary);
        }
      });
  }

}
