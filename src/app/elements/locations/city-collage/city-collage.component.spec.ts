import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCollageComponent } from './city-collage.component';

describe('CityCollageComponent', () => {
  let component: CityCollageComponent;
  let fixture: ComponentFixture<CityCollageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityCollageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityCollageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
