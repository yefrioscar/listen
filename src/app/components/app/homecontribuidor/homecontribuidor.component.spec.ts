import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecontribuidorComponent } from './homecontribuidor.component';

describe('HomecontribuidorComponent', () => {
  let component: HomecontribuidorComponent;
  let fixture: ComponentFixture<HomecontribuidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomecontribuidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecontribuidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
