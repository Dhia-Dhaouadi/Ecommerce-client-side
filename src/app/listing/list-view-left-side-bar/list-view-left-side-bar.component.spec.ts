import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewLeftSideBarComponent } from './list-view-left-side-bar.component';

describe('ListViewLeftSideBarComponent', () => {
  let component: ListViewLeftSideBarComponent;
  let fixture: ComponentFixture<ListViewLeftSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListViewLeftSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewLeftSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
