import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastTableListComponent } from './forecast-table-list.component';

describe('ForecastTableListComponent', () => {
  let component: ForecastTableListComponent;
  let fixture: ComponentFixture<ForecastTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
