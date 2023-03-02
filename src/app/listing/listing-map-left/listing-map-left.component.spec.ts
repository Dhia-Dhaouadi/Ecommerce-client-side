import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingMapLeftComponent } from './listing-map-left.component';

describe('ListingMapLeftComponent', () => {
  let component: ListingMapLeftComponent;
  let fixture: ComponentFixture<ListingMapLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingMapLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingMapLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
