import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaPropsComponent } from './idea-props.component';

describe('IdeaPropsComponent', () => {
  let component: IdeaPropsComponent;
  let fixture: ComponentFixture<IdeaPropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaPropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
