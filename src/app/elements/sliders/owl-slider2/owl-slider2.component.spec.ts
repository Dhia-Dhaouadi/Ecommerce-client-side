import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlSlider2Component } from './owl-slider2.component';

describe('OwlSlider2Component', () => {
  let component: OwlSlider2Component;
  let fixture: ComponentFixture<OwlSlider2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwlSlider2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlSlider2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
