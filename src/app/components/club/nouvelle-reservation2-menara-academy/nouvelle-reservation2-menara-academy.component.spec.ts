import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleReservation2MenaraAcademyComponent } from './nouvelle-reservation2-menara-academy.component';

describe('NouvelleReservation2MenaraAcademyComponent', () => {
  let component: NouvelleReservation2MenaraAcademyComponent;
  let fixture: ComponentFixture<NouvelleReservation2MenaraAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleReservation2MenaraAcademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleReservation2MenaraAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
