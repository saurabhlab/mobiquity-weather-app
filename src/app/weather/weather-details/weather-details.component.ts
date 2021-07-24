import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';
import { WeatherService } from 'src/app/service/weather.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit, OnDestroy {
  cityName = '';
  list: any[] = [];
  subscriptions = new SubSink();

  constructor(private weatherService: WeatherService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.cityName = this.route.snapshot.paramMap.get('cityname') ?? '';
    this.getForcastWeather();
  }
 
// get forcast weather data for next 5 days by passing cityid
  getForcastWeather() {
    this.spinner.show();
    const cityid = Number(this.route.snapshot.paramMap.get('cityid'));
    this.weatherService
      .getForcastWeather(cityid)
      .pipe(
        finalize(() => {
          this.spinner.hide();
        })
      )
      .subscribe(
        (res) => {
          // check if res retrun 200 success code and list length greater than 0
          if (res && res.cod === '200' && res.list.length > 0) {
            // from list get all records for 9:00:00 only
            this.list = res.list.filter(x => x.dt_txt.includes('09:00:00'));
            this.getIcons(this.list);

          }
        }
      )
  }


  // call API to get dynamic icon
  getIcons(list) {
    // check if list length greater than 0
    if (list && list?.length > 0) {
      list.forEach(element => {
        element.main.icon = this.weatherService.getIconUrl(element.weather[0].icon);
      });
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
