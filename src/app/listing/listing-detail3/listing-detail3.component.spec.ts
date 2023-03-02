import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetail3Component } from './listing-detail3.component';

describe('ListingDetail3Component', () => {
  let component: ListingDetail3Component;
  let fixture: ComponentFixture<ListingDetail3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingDetail3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDetail3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
