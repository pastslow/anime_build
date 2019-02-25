import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionActionsComponent } from './construction-actions.component';

describe('ConstructionActionsComponent', () => {
  let component: ConstructionActionsComponent;
  let fixture: ComponentFixture<ConstructionActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructionActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
