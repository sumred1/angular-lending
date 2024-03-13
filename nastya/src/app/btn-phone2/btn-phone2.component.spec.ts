import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPhone2Component } from './btn-phone2.component';

describe('BtnPhone2Component', () => {
  let component: BtnPhone2Component;
  let fixture: ComponentFixture<BtnPhone2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnPhone2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnPhone2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
