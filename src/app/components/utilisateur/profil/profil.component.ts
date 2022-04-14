import { Component, OnInit } from '@angular/core';
import { TokenPayload, UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

 
 
  credentials: TokenPayload = {
    id: 0,
    nom: '',
    prenom:'',
    telephone:'',
    adresse:'',
    email: '',
    motDePasse: '',
    sexe:'',
    nationalite: '',
    pseudoname: '',
    villeResidence: '',
    sportPrefere: '',
    equipePrefere: '',
    positionDeJeu: '',
    dureeExperience: ''
   
   
  };
  userConnect!: TokenPayload;

  constructor(public userService:UserService) { }

  ngOnInit(): void {
  
      console.log(this.credentials);
      this.userConnect = JSON.parse(localStorage.getItem("usercourant")!);
    }
 
   
  


}
