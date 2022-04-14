import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleReservationPsgComponent } from './nouvelle-reservation-psg.component';

describe('NouvelleReservationPsgComponent', () => {
  let component: NouvelleReservationPsgComponent;
  let fixture: ComponentFixture<NouvelleReservationPsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleReservationPsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleReservationPsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
