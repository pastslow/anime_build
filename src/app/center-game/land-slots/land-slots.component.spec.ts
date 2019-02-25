import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseBuildComponent } from './land-slots.component';

describe('HouseBuildComponent', () => {
  let component: HouseBuildComponent;
  let fixture: ComponentFixture<HouseBuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseBuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
