import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  appid = '3d8b309701a13f65b660fa2c64cdc517';
  constructor(public http: HttpClient) { }

  // get Weather data By City name and api id
  getWeatherByCity(cityName: string): Observable<any> {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${this.appid}`
    return this.http.get<any>(url);
  }

  // get weather for cast data for next 5 days
  getForcastWeather(cityId: number): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&appid=${this.appid}`
    return this.http.get<any>(url);
  }

  // get icon for weather
  getIconUrl(icon: String) {
    return 'http://openweathermap.org/img/w/' + icon + ".png"
  }

}
