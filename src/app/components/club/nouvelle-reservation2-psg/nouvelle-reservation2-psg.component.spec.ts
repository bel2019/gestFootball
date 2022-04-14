import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleReservation2PsgComponent } from './nouvelle-reservation2-psg.component';

describe('NouvelleReservation2PsgComponent', () => {
  let component: NouvelleReservation2PsgComponent;
  let fixture: ComponentFixture<NouvelleReservation2PsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleReservation2PsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleReservation2PsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
