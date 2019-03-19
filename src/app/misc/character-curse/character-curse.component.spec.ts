import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCurseComponent } from './character-curse.component';

describe('CharacterCurseComponent', () => {
  let component: CharacterCurseComponent;
  let fixture: ComponentFixture<CharacterCurseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterCurseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
