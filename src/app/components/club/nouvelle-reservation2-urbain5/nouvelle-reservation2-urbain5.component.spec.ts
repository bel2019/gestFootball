import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleReservation2Urbain5Component } from './nouvelle-reservation2-urbain5.component';

describe('NouvelleReservation2Urbain5Component', () => {
  let component: NouvelleReservation2Urbain5Component;
  let fixture: ComponentFixture<NouvelleReservation2Urbain5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleReservation2Urbain5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleReservation2Urbain5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
