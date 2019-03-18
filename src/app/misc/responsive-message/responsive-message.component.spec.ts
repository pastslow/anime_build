import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveMessageComponent } from './responsive-message.component';

describe('ResponsiveMessageComponent', () => {
  let component: ResponsiveMessageComponent;
  let fixture: ComponentFixture<ResponsiveMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
