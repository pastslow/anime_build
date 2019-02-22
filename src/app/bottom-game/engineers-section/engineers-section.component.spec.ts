import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineersSectionComponent } from './engineers-section.component';

describe('EngineersSectionComponent', () => {
  let component: EngineersSectionComponent;
  let fixture: ComponentFixture<EngineersSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineersSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
