import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotActionsComponent } from './slot-actions.component';

describe('SlotActionsComponent', () => {
  let component: SlotActionsComponent;
  let fixture: ComponentFixture<SlotActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
