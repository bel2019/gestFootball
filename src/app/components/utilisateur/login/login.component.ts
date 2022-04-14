
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { TokenPayload, UserService } from 'src/app/service/user.service';
import {
  SocialAuthService,
  GoogleLoginProvider,
  FacebookLoginProvider,
  SocialUser,
} from 'angularx-social-login';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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

  userCourant!: TokenPayload;
  public user: SocialUser = new SocialUser;
  loginForm!:  FormGroup;
  users:User =new User();
  Users: any={};
  isLoggedIn = false;
  isLoginFailed = false;
  ngOnInit()  {

    this.socialAuthService.authState.subscribe(user => {
      this.user = user;
      console.log(user);
    });


    
  
  }

  
  constructor(private userService:UserService, private router:Router,public fb:FormBuilder,private socialAuthService: SocialAuthService,private toastr:ToastrService){}

/**************************methode login******************************/

  userLogin() {
    this.userService.login(this.credentials).subscribe(
      () => {

        if(this.userService){
          this.userCourant = this.userService.getUserDetails();
          localStorage.setItem("usercourant",JSON.stringify(this.userCourant));
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.toastr.success('Valide ! Utlisateur et mot de passe correct')
          console.log(this.credentials);
           this.router.navigateByUrl('dashboard');
          }  
      },
      err => {
        console.error(err) 
        this.isLoginFailed = true;
             this.toastr.error('Erreur ! Utilisateur ou mot de passe incorrect')

      }
    )
  }


     
        
  


/**************************methode login with google************************/
loginWithGoogle(): void {
  this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData)=>{
    this.user=userData;
    this.toastr.success('login successful');
         this.router.navigate(['/dashboard']);
  }) ,this.toastr.error('login failed');
  


}
/**************************methode login with fecebook************************/
loginWithFecebook(): void {
  this.socialAuthService.signIn( FacebookLoginProvider.PROVIDER_ID).then((userData)=>{
    this.user=userData;
    this.toastr.success('login successful');
         this.router.navigate(['/dashboard']);
  }) ,this.toastr.error('login failed');
  


}
/******************************methode signout*******************************/
public signOut(): void {
  this.socialAuthService.signOut();
}





}
 /*
 
    
  login() {
    const val = this.loginForm.value;
    this.userService.login(val.email, val.motDePasse).subscribe(
      res =>{
      this.user = res;
        localStorage.setItem("email", this.user.email);
       
        let jwt = "Bearer " + this.user.jwt;
          localStorage.setItem("token", jwt)
       
         this.userService.islogin = true;
        if (this.user.role  == "utilisateur")
         {
         this.userService.utilisateur = true;
          this.router.navigate(['/dashboard']);
      }
      else
      {
        this.userService.partenaire = true;
        
        this.router.navigate(['/dahboard']);
      }
          },
          error => 
          
            this.toastr.warning( 'Login Incorrecte ')
         
          
          );
        }
     
        
        
        logOut() {
          localStorage.removeItem("email");
        }
        
   */



 







 
   
   