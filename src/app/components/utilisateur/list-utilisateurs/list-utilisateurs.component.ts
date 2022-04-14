import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-list-utilisateurs',
  templateUrl: './list-utilisateurs.component.html',
  styleUrls: ['./list-utilisateurs.component.scss']
})

export class ListUtilisateursComponent implements OnInit {


  constructor(public userService:UserService) { }

  ngOnInit(): void {
       
    this.getData();
  }




  getData() {
    this.userService.getAll().subscribe(
      response =>{this.userService.list = response;}
     );
   
  }
}
