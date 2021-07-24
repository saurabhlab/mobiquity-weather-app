import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather/weather.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';


@NgModule({
  declarations: [
    WeatherComponent,
    WeatherDetailsComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule
  ]
})
export class WeatherModule { }
