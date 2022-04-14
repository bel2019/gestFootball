import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleReservationFoot5Component } from './nouvelle-reservation-foot5.component';

describe('NouvelleReservationFoot5Component', () => {
  let component: NouvelleReservationFoot5Component;
  let fixture: ComponentFixture<NouvelleReservationFoot5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleReservationFoot5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleReservationFoot5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
