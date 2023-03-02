import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripListing2Component } from './trip-listing2.component';

describe('TripListing2Component', () => {
  let component: TripListing2Component;
  let fixture: ComponentFixture<TripListing2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripListing2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripListing2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
