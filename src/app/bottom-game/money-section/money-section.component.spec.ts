import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneySectionComponent } from './money-section.component';

describe('MoneySectionComponent', () => {
  let component: MoneySectionComponent;
  let fixture: ComponentFixture<MoneySectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneySectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
