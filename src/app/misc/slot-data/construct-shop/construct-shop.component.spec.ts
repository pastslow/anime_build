import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructShopComponent } from './construct-shop.component';

describe('ConstructShopComponent', () => {
  let component: ConstructShopComponent;
  let fixture: ComponentFixture<ConstructShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
