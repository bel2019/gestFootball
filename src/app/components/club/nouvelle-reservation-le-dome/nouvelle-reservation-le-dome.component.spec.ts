import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleReservationLeDomeComponent } from './nouvelle-reservation-le-dome.component';

describe('NouvelleReservationLeDomeComponent', () => {
  let component: NouvelleReservationLeDomeComponent;
  let fixture: ComponentFixture<NouvelleReservationLeDomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleReservationLeDomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleReservationLeDomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
