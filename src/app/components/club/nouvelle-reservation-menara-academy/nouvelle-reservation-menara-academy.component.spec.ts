import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleReservationMenaraAcademyComponent } from './nouvelle-reservation-menara-academy.component';

describe('NouvelleReservationMenaraAcademyComponent', () => {
  let component: NouvelleReservationMenaraAcademyComponent;
  let fixture: ComponentFixture<NouvelleReservationMenaraAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleReservationMenaraAcademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleReservationMenaraAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
