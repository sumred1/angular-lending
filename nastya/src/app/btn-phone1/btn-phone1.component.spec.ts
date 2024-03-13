import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPhone1Component } from './btn-phone1.component';

describe('BtnPhone1Component', () => {
  let component: BtnPhone1Component;
  let fixture: ComponentFixture<BtnPhone1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnPhone1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnPhone1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
