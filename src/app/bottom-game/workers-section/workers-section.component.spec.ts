import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersSectionComponent } from './workers-section.component';

describe('WorkersSectionComponent', () => {
  let component: WorkersSectionComponent;
  let fixture: ComponentFixture<WorkersSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
