import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WeatherService } from 'src/app/service/weather.service';

import { WeatherDetailsComponent } from './weather-details.component';

describe('WeatherDetailsComponent', () => {
  let component: WeatherDetailsComponent;
  let fixture: ComponentFixture<WeatherDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule,HttpClientModule], 
      declarations: [ WeatherDetailsComponent ],
      providers:[WeatherService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should call getForcastWeather', () => {
    spyOn(component, 'getForcastWeather');
    component.ngOnInit();
    expect(component.getForcastWeather).toHaveBeenCalled();
  });
  
});
