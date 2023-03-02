import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityOwlComponent } from './city-owl.component';

describe('CityOwlComponent', () => {
  let component: CityOwlComponent;
  let fixture: ComponentFixture<CityOwlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityOwlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityOwlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
