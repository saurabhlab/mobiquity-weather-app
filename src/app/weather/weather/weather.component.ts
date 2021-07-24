import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { SubSink } from 'subsink';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {
  listofCities: any[] = [];
  subscriptions = new SubSink();
  cities = ['London', 'paris', 'rome', 'madrid', 'dublin'];

  constructor(private weatherService: WeatherService,
    private spinner: NgxSpinnerService) { }


  ngOnInit(): void {
    this.getListofCities();
  }

  // getting weather data from API for all cities
  getListofCities() {
    this.cities.forEach(element => {
      this.getWeatherByCity(element);
    });
  }

  // get weather data for each city
  getWeatherByCity(cityName: string): void {
    this.spinner.show();
    this.weatherService
      .getWeatherByCity(cityName)
      .pipe(
        finalize(() => {
          this.spinner.hide();
        })
      )
      .subscribe(
        (res) => {
          if (res) {
            this.listofCities.push(res);
          }
        }
      )
  }

  
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
