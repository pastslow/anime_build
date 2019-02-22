import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsSectionComponent } from './materials-section.component';

describe('MaterialsSectionComponent', () => {
  let component: MaterialsSectionComponent;
  let fixture: ComponentFixture<MaterialsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
