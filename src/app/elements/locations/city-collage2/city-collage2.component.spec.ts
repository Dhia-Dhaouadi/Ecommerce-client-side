import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCollage2Component } from './city-collage2.component';

describe('CityCollage2Component', () => {
  let component: CityCollage2Component;
  let fixture: ComponentFixture<CityCollage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityCollage2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityCollage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
