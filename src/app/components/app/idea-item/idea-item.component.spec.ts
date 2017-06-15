import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaItemComponent } from './idea-item.component';

describe('IdeaItemComponent', () => {
  let component: IdeaItemComponent;
  let fixture: ComponentFixture<IdeaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
