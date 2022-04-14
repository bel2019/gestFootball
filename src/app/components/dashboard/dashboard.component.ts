import { Component, OnInit } from '@angular/core';
import { TokenPayload, UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userConnect!: TokenPayload;
  constructor(public userService:UserService) { }

  ngOnInit(): void {
    this.userConnect = JSON.parse(localStorage.getItem("usercourant")!);
  }

}
