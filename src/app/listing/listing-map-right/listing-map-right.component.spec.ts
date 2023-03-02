import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingMapRightComponent } from './listing-map-right.component';

describe('ListingMapRightComponent', () => {
  let component: ListingMapRightComponent;
  let fixture: ComponentFixture<ListingMapRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingMapRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingMapRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
