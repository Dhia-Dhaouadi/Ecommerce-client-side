import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewRightSideBarComponent } from './list-view-right-side-bar.component';

describe('ListViewRightSideBarComponent', () => {
  let component: ListViewRightSideBarComponent;
  let fixture: ComponentFixture<ListViewRightSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListViewRightSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewRightSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
