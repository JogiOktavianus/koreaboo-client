import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmoviePage } from './kmovie.page';

describe('KmoviePage', () => {
  let component: KmoviePage;
  let fixture: ComponentFixture<KmoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmoviePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
