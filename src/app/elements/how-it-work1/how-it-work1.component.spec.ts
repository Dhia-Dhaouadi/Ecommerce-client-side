import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItWork1Component } from './how-it-work1.component';

describe('HowItWork1Component', () => {
  let component: HowItWork1Component;
  let fixture: ComponentFixture<HowItWork1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowItWork1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowItWork1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
