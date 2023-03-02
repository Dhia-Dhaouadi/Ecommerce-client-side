import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityOwl2Component } from './city-owl2.component';

describe('CityOwl2Component', () => {
  let component: CityOwl2Component;
  let fixture: ComponentFixture<CityOwl2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityOwl2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityOwl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
