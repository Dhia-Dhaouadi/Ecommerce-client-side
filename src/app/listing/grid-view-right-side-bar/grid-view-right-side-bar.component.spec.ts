import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridViewRightSideBarComponent } from './grid-view-right-side-bar.component';

describe('GridViewRightSideBarComponent', () => {
  let component: GridViewRightSideBarComponent;
  let fixture: ComponentFixture<GridViewRightSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridViewRightSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridViewRightSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
