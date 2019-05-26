import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVshowPage } from './home-vshow.page';

describe('HomeVshowPage', () => {
  let component: HomeVshowPage;
  let fixture: ComponentFixture<HomeVshowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeVshowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVshowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
