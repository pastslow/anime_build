import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructBuildingComponent } from './construct-building.component';

describe('ConstructBuildingComponent', () => {
  let component: ConstructBuildingComponent;
  let fixture: ComponentFixture<ConstructBuildingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructBuildingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
