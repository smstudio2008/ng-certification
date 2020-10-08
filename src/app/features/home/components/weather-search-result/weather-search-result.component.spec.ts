import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSearchResultComponent } from './weather-search-result.component';

describe('WeatherSearchResultComponent', () => {
  let component: WeatherSearchResultComponent;
  let fixture: ComponentFixture<WeatherSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
