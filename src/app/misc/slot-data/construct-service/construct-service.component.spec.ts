import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructServiceComponent } from './construct-service.component';

describe('ConstructServiceComponent', () => {
  let component: ConstructServiceComponent;
  let fixture: ComponentFixture<ConstructServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
