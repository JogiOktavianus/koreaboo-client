import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpopPage } from './kpop.page';

describe('KpopPage', () => {
  let component: KpopPage;
  let fixture: ComponentFixture<KpopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
