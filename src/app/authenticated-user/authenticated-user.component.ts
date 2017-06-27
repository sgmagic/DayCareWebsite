import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.interface';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
   moduleId: module.id,
  selector: 'app-authenticated-user',
  templateUrl: './authenticated-user.component.html',
  styleUrls: ['./authenticated-user.component.css']
})
export class AuthenticatedUserComponent implements OnInit {
currentUser: User;
user: User;

  constructor(public userService: UserService,
  public router:Router) { 
    
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.userService.getById(this.currentUser.id).subscribe(user => {this.user=user;});
    this.currentUser = this.user;
  }

  signout(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['/home']);
  }

  ngOnInit() {
 this.user = {
    id: 0,
    username: null,
    password: null,
    retypepassword: null
    }
  }

}
