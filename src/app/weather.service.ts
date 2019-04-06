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
