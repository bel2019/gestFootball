import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleReservation2ElarabiBramsComponent } from './nouvelle-reservation2-elarabi-brams.component';

describe('NouvelleReservation2ElarabiBramsComponent', () => {
  let component: NouvelleReservation2ElarabiBramsComponent;
  let fixture: ComponentFixture<NouvelleReservation2ElarabiBramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleReservation2ElarabiBramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleReservation2ElarabiBramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
