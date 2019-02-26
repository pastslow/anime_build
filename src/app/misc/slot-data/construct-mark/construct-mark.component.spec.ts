import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructMarkComponent } from './construct-mark.component';

describe('ConstructMarkComponent', () => {
  let component: ConstructMarkComponent;
  let fixture: ComponentFixture<ConstructMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructMarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
