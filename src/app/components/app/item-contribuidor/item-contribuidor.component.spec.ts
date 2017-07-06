import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemContribuidorComponent } from './item-contribuidor.component';

describe('ItemContribuidorComponent', () => {
  let component: ItemContribuidorComponent;
  let fixture: ComponentFixture<ItemContribuidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemContribuidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemContribuidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
