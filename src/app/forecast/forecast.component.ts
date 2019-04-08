import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Forecast } from '../forecast';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  cityForecast: Forecast[] = [];
  forecastForm: FormGroup;

  constructor(private ws: WeatherService) { }

  ngOnInit() {
    this.forecastForm = new FormGroup({
      forecastCity: new FormControl('')
    });
  }

  onSubmit() {
    this.cityForecast = [];
    this.ws.getForecast(this.forecastForm.value.forecastCity)
      .subscribe((data) => {
        const tempArr = data.list.filter(item => item.dt_txt.endsWith('12:00:00'));
        for (const el of tempArr) {
          const temporary = new Forecast(el.dt_txt,
                                        el.weather[0].icon,
                                        el.main.temp);
          this.cityForecast.push(temporary);
        }
      });
  }

}
