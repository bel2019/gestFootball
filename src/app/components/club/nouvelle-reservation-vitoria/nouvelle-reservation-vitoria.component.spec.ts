import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleReservationVitoriaComponent } from './nouvelle-reservation-vitoria.component';

describe('NouvelleReservationVitoriaComponent', () => {
  let component: NouvelleReservationVitoriaComponent;
  let fixture: ComponentFixture<NouvelleReservationVitoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleReservationVitoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleReservationVitoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
