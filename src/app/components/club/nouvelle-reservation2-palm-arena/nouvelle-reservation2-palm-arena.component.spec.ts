import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleReservation2PalmArenaComponent } from './nouvelle-reservation2-palm-arena.component';

describe('NouvelleReservation2PalmArenaComponent', () => {
  let component: NouvelleReservation2PalmArenaComponent;
  let fixture: ComponentFixture<NouvelleReservation2PalmArenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleReservation2PalmArenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleReservation2PalmArenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
