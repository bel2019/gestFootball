import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { TokenPayload, UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
 
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
   
  
   this.userConnect = JSON.parse(localStorage.getItem("usercourant")!);
  }


 


}
