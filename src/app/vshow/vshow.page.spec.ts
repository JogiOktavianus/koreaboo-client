import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VshowPage } from './vshow.page';

describe('VshowPage', () => {
  let component: VshowPage;
  let fixture: ComponentFixture<VshowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VshowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VshowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
