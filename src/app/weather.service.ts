import { Injectable } from '@angular/core';
import { Forecast } from './forecast';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  foreCast: Forecast[] = [
    new Forecast('Saturday, April 6', 'https://openweathermap.org/img/w/01d.png', '12.12', '11.07'),
    new Forecast('Sunday, April 7', 'https://openweathermap.org/img/w/01d.png', '9.26', '6.32'),
    new Forecast('Monday, April 8', 'https://openweathermap.org/img/w/01d.png', '11.73', '10.32'),
    new Forecast('Tuesday, April 9', 'https://openweathermap.org/img/w/01d.png', '7.43', '5.52'),
    new Forecast('Wednesday, April 10', 'https://openweathermap.org/img/w/01d.png', '12.12', '11.07')
  ];

  constructor(private httpClient: HttpClient) { }

  getForecast(city: string): Observable<any> {
    // return this.foreCast;
    return this.httpClient
      .get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${environment.appId}&units=metric`)
      .pipe(
        map(response => response),
        catchError(error => {
          console.error(error);
          throwError(error);
        })
      );
  }
}
