import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandBoughtComponent } from './land-bought.component';

describe('LandBoughtComponent', () => {
  let component: LandBoughtComponent;
  let fixture: ComponentFixture<LandBoughtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandBoughtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandBoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
