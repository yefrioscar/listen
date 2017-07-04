import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaMainComponent } from './idea-main.component';

describe('IdeaMainComponent', () => {
  let component: IdeaMainComponent;
  let fixture: ComponentFixture<IdeaMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
