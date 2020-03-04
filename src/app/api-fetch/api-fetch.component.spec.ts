import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiFetchComponent } from './api-fetch.component';

describe('ApiFetchComponent', () => {
  let component: ApiFetchComponent;
  let fixture: ComponentFixture<ApiFetchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiFetchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
