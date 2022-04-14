import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { User } from '../model/user';




export interface UserDetails {
  id: number
  nom: string
  prenom:string
  email: string
  motDePasse: string
  telephone:string
  adresse:string
  sexe:string
  nationalite: string
  pseudoname: string
  villeResidence: string
  sportPrefere: string
  equipePrefere: string
  positionDeJeu: string
  dureeExperience: string
  exp: number
  iat: number
}
interface TokenResponse {
  token: string 
}
export interface TokenPayload {
  id: number
  nom: string
  prenom:string
  email: string
  motDePasse: string
  telephone:string
  adresse:string
  nationalite: string
  pseudoname: string
  villeResidence: string
  sportPrefere: string
  equipePrefere: string
  positionDeJeu: string
  dureeExperience: string
  sexe:string
 
}
@Injectable()
export class UserService {
  private token!: string;
  public userCourant: any;
  list! : User[];
  private baseUrl = 'http://localhost:8090/api/';
  //private baseUrl1 = 'http://localhost:8090/api/login'
  constructor(private http:HttpClient,private router:Router){}
 



  private saveToken(token: string): void {
    localStorage.setItem('usertoken', token)
    this.token = token
  }

  private getToken(): string {
    if (!this.token) {
    this.token = localStorage.getItem('usertoken')!
  
        }
    return this.token
  }
  
  public getUserDetails(): UserDetails{
    const token = this.getToken()
    let payload
    if (token) {
      payload = token.split('.')[1]
      payload = window.atob(payload)
      return JSON.parse(payload)
    } else {
      return null as any
    }
  }
  
  public isLoggedIn(): boolean {
    const user = this.getUserDetails()
    if (user) {
      return user.exp > Date.now() / 1000
    } else {
      return false
    }
  }
 
  isUserLogged(): boolean {  

    if  (localStorage.getItem('token') !== null) {
      return true;
  }
    return false;
}

/**************************methode register******************************/
 registerUser(user: TokenPayload){
  return this.http.post(this.baseUrl+"users",user)
}
/**************************methode login********************************/
public login(user: TokenPayload): Observable<any> {
  const base = this.http.post(this.baseUrl+"login", user)
  const request = base.pipe()
    map((data: TokenResponse) => {
      if (data.token) {
        this.saveToken(data.token)
      }
      return data
    })
 
  return request
} 

/*****************  logout ************************/
public logout(): void {
  this.token = ''
  window.localStorage.removeItem('usertoken')
  window.localStorage.removeItem("usercourant")
  this.router.navigateByUrl('/')
}
/*****************  get tout les users ************************/
getAll(): Observable<any> {
   
  return this.http.get(this.baseUrl +"users");
}





}






