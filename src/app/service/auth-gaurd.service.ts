import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService {
  constructor(private router: Router,
    private userService: UserService) { }

  canActivate() {
    if(!this.userService.isLoggedIn()){
      this.router.navigateByUrl('/')
      return false
     }
     return true
   }

}
