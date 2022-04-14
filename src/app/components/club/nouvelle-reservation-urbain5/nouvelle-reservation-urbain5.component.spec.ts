import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleReservationUrbain5Component } from './nouvelle-reservation-urbain5.component';

describe('NouvelleReservationUrbain5Component', () => {
  let component: NouvelleReservationUrbain5Component;
  let fixture: ComponentFixture<NouvelleReservationUrbain5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleReservationUrbain5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleReservationUrbain5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
