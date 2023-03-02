import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingSidebarPromotionComponent } from './listing-sidebar-promotion.component';

describe('ListingSidebarPromotionComponent', () => {
  let component: ListingSidebarPromotionComponent;
  let fixture: ComponentFixture<ListingSidebarPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingSidebarPromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingSidebarPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
