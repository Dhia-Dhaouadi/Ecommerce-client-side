import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItWork3Component } from './how-it-work3.component';

describe('HowItWork3Component', () => {
  let component: HowItWork3Component;
  let fixture: ComponentFixture<HowItWork3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowItWork3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowItWork3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
