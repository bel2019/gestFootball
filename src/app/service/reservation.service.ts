import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';


interface TokenResponse {
  token: string 
}
export interface TokenPayload {
  id: number
  typeDeMatch: string
  niveauDuMatch:string
  VisibiliteDuMatch: string
  dateDuMatch: string
  choixDuTerrain:string

 
}
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  

  private baseUrl = 'http://localhost:8090/api/';
  constructor(private http:HttpClient,private router:Router) { }

  reservation(reservation: TokenPayload){
    return this.http.post(this.baseUrl+"reservation",reservation);
}
  showReservation(): Observable<any> {
    return this.http.get(this.baseUrl+"reservation");

}
}