import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructHouseComponent } from './construct-house.component';

describe('ConstructHouseComponent', () => {
  let component: ConstructHouseComponent;
  let fixture: ComponentFixture<ConstructHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
