import { Injectable } from '@angular/core';
import { Forecast } from './forecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  foreCast: Forecast[] = [
    new Forecast('Saturday, April 6', 'https://openweathermap.org/img/w/01d.png', '12.12', '11.07'),
    new Forecast('Sunday, April 7', 'https://openweathermap.org/img/w/01d.png', '12.12', '11.07'),
    new Forecast('Monday, April 8', 'https://openweathermap.org/img/w/01d.png', '12.12', '11.07'),
    new Forecast('Tuesday, April 9', 'https://openweathermap.org/img/w/01d.png', '12.12', '11.07'),
    new Forecast('Wednesday, April 10', 'https://openweathermap.org/img/w/01d.png', '12.12', '11.07')
  ];

  constructor() { }

  getForecast() {
    return this.foreCast;
  }
}
