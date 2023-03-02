import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetail1Component } from './listing-detail1.component';

describe('ListingDetail1Component', () => {
  let component: ListingDetail1Component;
  let fixture: ComponentFixture<ListingDetail1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingDetail1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDetail1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
