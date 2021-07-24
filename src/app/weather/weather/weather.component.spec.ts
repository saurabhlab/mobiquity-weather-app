import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherService } from 'src/app/service/weather.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WeatherComponent } from './weather.component';
import { HttpClientModule } from '@angular/common/http';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,HttpClientModule], 
      declarations: [ WeatherComponent ],
      providers:[WeatherService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call oninit', () => {
    spyOn(component, 'getListofCities');
    component.ngOnInit();
    expect(component.getListofCities).toHaveBeenCalled();
  });
  
  
  it('should call oninit', () => {
    spyOn(component, 'getWeatherByCity');
    component.getListofCities();
    expect(component.getWeatherByCity).toHaveBeenCalled();
  });
});
