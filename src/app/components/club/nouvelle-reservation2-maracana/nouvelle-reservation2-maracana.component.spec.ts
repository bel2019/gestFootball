import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleReservation2MaracanaComponent } from './nouvelle-reservation2-maracana.component';

describe('NouvelleReservation2MaracanaComponent', () => {
  let component: NouvelleReservation2MaracanaComponent;
  let fixture: ComponentFixture<NouvelleReservation2MaracanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleReservation2MaracanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleReservation2MaracanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
