import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftCharacterComponent } from './left-character.component';

describe('LeftCharacterComponent', () => {
  let component: LeftCharacterComponent;
  let fixture: ComponentFixture<LeftCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
