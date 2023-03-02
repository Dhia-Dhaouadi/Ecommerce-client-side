import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetail2Component } from './listing-detail2.component';

describe('ListingDetail2Component', () => {
  let component: ListingDetail2Component;
  let fixture: ComponentFixture<ListingDetail2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingDetail2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
