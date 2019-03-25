import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeSlotComponent } from './upgrade-slot.component';

describe('UpgradeSlotComponent', () => {
  let component: UpgradeSlotComponent;
  let fixture: ComponentFixture<UpgradeSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradeSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
