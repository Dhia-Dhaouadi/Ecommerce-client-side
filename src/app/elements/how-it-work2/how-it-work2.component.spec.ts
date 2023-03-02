import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItWork2Component } from './how-it-work2.component';

describe('HowItWork2Component', () => {
  let component: HowItWork2Component;
  let fixture: ComponentFixture<HowItWork2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowItWork2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowItWork2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
