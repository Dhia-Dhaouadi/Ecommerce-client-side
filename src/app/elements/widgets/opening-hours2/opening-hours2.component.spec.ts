import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningHours2Component } from './opening-hours2.component';

describe('OpeningHours2Component', () => {
  let component: OpeningHours2Component;
  let fixture: ComponentFixture<OpeningHours2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpeningHours2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningHours2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
