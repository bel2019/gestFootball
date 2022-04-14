import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleReservation2KickOffComponent } from './nouvelle-reservation2-kick-off.component';

describe('NouvelleReservation2KickOffComponent', () => {
  let component: NouvelleReservation2KickOffComponent;
  let fixture: ComponentFixture<NouvelleReservation2KickOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleReservation2KickOffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleReservation2KickOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
