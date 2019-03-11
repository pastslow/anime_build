import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartDataComponent } from './start-data.component';

describe('StartDataComponent', () => {
  let component: StartDataComponent;
  let fixture: ComponentFixture<StartDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
