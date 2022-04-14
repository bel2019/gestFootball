import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleReservationMaracanaComponent } from './nouvelle-reservation-maracana.component';

describe('NouvelleReservationMaracanaComponent', () => {
  let component: NouvelleReservationMaracanaComponent;
  let fixture: ComponentFixture<NouvelleReservationMaracanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleReservationMaracanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleReservationMaracanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
