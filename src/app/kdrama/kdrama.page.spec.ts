import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KdramaPage } from './kdrama.page';

describe('KdramaPage', () => {
  let component: KdramaPage;
  let fixture: ComponentFixture<KdramaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KdramaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KdramaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
