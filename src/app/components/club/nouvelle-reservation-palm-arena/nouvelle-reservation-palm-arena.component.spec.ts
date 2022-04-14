import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleReservationPalmArenaComponent } from './nouvelle-reservation-palm-arena.component';

describe('NouvelleReservationPalmArenaComponent', () => {
  let component: NouvelleReservationPalmArenaComponent;
  let fixture: ComponentFixture<NouvelleReservationPalmArenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleReservationPalmArenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleReservationPalmArenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
