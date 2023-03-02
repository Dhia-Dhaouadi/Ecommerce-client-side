import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridViewLeftSideBarComponent } from './grid-view-left-side-bar.component';

describe('GridViewLeftSideBarComponent', () => {
  let component: GridViewLeftSideBarComponent;
  let fixture: ComponentFixture<GridViewLeftSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridViewLeftSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridViewLeftSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
