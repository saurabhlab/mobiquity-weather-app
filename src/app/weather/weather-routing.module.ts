import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'weather',
    pathMatch: 'full'
  },

  {
    path: 'weather', component: WeatherComponent,
    data: { title: 'Weather' }
  },

  {
    path: 'details/:cityid/:cityname', component: WeatherDetailsComponent,
    data: { title: 'Weather Details' }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
