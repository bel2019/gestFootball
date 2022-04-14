import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleReservation2VitoriaComponent } from './nouvelle-reservation2-vitoria.component';

describe('NouvelleReservation2VitoriaComponent', () => {
  let component: NouvelleReservation2VitoriaComponent;
  let fixture: ComponentFixture<NouvelleReservation2VitoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleReservation2VitoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleReservation2VitoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
