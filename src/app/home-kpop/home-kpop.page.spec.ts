import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeKpopPage } from './home-kpop.page';

describe('HomeKpopPage', () => {
  let component: HomeKpopPage;
  let fixture: ComponentFixture<HomeKpopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeKpopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeKpopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
