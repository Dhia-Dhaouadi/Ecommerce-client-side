import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripOwlComponent } from './trip-owl.component';

describe('TripOwlComponent', () => {
  let component: TripOwlComponent;
  let fixture: ComponentFixture<TripOwlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripOwlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripOwlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
