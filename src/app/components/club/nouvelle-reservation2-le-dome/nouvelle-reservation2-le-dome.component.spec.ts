import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleReservation2LeDomeComponent } from './nouvelle-reservation2-le-dome.component';

describe('NouvelleReservation2LeDomeComponent', () => {
  let component: NouvelleReservation2LeDomeComponent;
  let fixture: ComponentFixture<NouvelleReservation2LeDomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleReservation2LeDomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleReservation2LeDomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
