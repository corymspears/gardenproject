import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindTextComponent } from './bind-text.component';

describe('BindTextComponent', () => {
  let component: BindTextComponent;
  let fixture: ComponentFixture<BindTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
