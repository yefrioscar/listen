import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaluserComponent } from './modaluser.component';

describe('ModaluserComponent', () => {
  let component: ModaluserComponent;
  let fixture: ComponentFixture<ModaluserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaluserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
