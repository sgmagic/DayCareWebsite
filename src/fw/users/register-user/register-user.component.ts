import { Component,OnInit} from '@angular/core';
import { UserService} from '../../../app/services/user.service';
import { AlertService } from '../../services/alert.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../app/models/user.interface';


@Component({
  moduleId: module.id,
  selector: 'fw-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
    showRegister:boolean=true;
// public selectedTab = 0;
user: User;
error = false;
success = false;
ngOnInit(){
   this.success = false;  
this.user = {
    id: 0,
    username: null,
    password: null,
    retypepassword: null,
    }
    
}

    loading = false;

    constructor(public route: ActivatedRoute,
        public router: Router,
        public userService: UserService,
        public alertService: AlertService) { }

save(IsSubmitted:boolean) {
    console.log(this.user);
    // call API to save customer
    if( IsSubmitted != false)
    {
        
     this.loading = true;
        this.userService.registerUser(this.user)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', false);
                    // this.router.navigate(['/home']);
                    this.success = true;
                    this.error = false;
                   
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                    this.error = true;
                });
    }
  }

// nextTab(IsSubmitted:boolean) {
// if (IsSubmitted){
//     this.save(true);
// }
//   this.selectedTab += 1;
//   if (this.selectedTab > 2) this.selectedTab = 0;
// }

// prevTab() {
//   this.selectedTab -= 1;
//   if (this.selectedTab < 0) this.selectedTab = 3;
// }


close()
{
this.router.navigate(['/home']);
}
}



