import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripListing1Component } from './trip-listing1.component';

describe('TripListing1Component', () => {
  let component: TripListing1Component;
  let fixture: ComponentFixture<TripListing1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripListing1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripListing1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
