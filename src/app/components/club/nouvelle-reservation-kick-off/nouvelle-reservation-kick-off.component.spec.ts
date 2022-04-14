import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleReservationKickOffComponent } from './nouvelle-reservation-kick-off.component';

describe('NouvelleReservationKickOffComponent', () => {
  let component: NouvelleReservationKickOffComponent;
  let fixture: ComponentFixture<NouvelleReservationKickOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleReservationKickOffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleReservationKickOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
