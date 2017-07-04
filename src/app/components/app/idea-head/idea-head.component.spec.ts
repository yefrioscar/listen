import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaHeadComponent } from './idea-head.component';

describe('IdeaHeadComponent', () => {
  let component: IdeaHeadComponent;
  let fixture: ComponentFixture<IdeaHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
