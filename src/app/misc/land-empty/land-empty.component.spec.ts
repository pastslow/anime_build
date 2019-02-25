import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandEmptyComponent } from './land-empty.component';

describe('LandEmptyComponent', () => {
  let component: LandEmptyComponent;
  let fixture: ComponentFixture<LandEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
