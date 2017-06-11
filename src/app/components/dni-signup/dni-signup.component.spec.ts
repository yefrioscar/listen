import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DniSignupComponent } from './dni-signup.component';

describe('HeaderSignupComponent', () => {
  let component: DniSignupComponent;
  let fixture: ComponentFixture<DniSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DniSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DniSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
