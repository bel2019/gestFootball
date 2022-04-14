import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleReservation2Foot5Component } from './nouvelle-reservation2-foot5.component';

describe('NouvelleReservation2Foot5Component', () => {
  let component: NouvelleReservation2Foot5Component;
  let fixture: ComponentFixture<NouvelleReservation2Foot5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleReservation2Foot5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleReservation2Foot5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
