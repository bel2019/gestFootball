import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenPayload, UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  alert:boolean=false;
  credentials: TokenPayload = {
    id: 0,
    nom: '',
    prenom: '',
    telephone: '',
    adresse: '',
    email: '',
    motDePasse: '',
    sexe: '',
    nationalite: '',
    pseudoname: '',
    villeResidence: '',
    sportPrefere: '',
    equipePrefere: '',
    positionDeJeu: '',
    dureeExperience: ''
   
  };
 //public register!:FormGroup;
  ngOnInit() {
  /*  this.register=this.fb.group({
      nom: new FormControl('',[Validators.required,Validators.maxLength(40)]),
      prenom: new FormControl('',[Validators.required,Validators.minLength(4)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      motDePasse: new FormControl('',Validators.required),
      telephone: new FormControl('',Validators.required),
      adresse: new FormControl('',Validators.required),
      sexe: new FormControl('',Validators.required),
      role: new FormControl('',Validators.required)
    })*/
  }
  constructor(private userService:UserService,private router:Router, private fb:FormBuilder, private toastr:ToastrService){}

/**************************methode register******************************/
registration() {
  this.userService.registerUser(this.credentials).subscribe(
    () => {
      console.log(this.credentials);
      this.toastr.success('inscription avec succés');
      this.router.navigateByUrl("/");
    },
    err => {
      console.error(err);
      this.toastr.error('erreur inscription ');
    }
  );
}



  

  


  
   






 

}

   