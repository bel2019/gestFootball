import { Component, OnInit } from '@angular/core';
import { TokenPayload } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-nouvelle-reservation2-elarabi-brams',
  templateUrl: './nouvelle-reservation2-elarabi-brams.component.html',
  styleUrls: ['./nouvelle-reservation2-elarabi-brams.component.scss']
})
export class NouvelleReservation2ElarabiBramsComponent implements OnInit {
  credentials: TokenPayload = {
    id: 0,
    typeDeMatch: '',
    niveauDuMatch: '',
    VisibiliteDuMatch: '',
    dateDuMatch: '',
    choixDuTerrain: '',
   
  };

  selected!: Date | null;
  constructor() { }

  ngOnInit(): void {
  }

 

}
