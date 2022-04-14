import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleReservationElarabiBramsComponent } from './nouvelle-reservation-elarabi-brams.component';

describe('NouvelleReservationElarabiBramsComponent', () => {
  let component: NouvelleReservationElarabiBramsComponent;
  let fixture: ComponentFixture<NouvelleReservationElarabiBramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleReservationElarabiBramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleReservationElarabiBramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
