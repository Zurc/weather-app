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
        for (let i = 3; i < data.list.length; i += 8) {
          const temporary = new Forecast(data.list[i].dt_txt,
                                        data.list[i].weather[0].icon,
                                        data.list[i].main.temp);
          this.cityForecast.push(temporary);
        }
      });
  }

}
