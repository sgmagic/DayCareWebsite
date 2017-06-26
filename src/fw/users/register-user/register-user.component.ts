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
    showLogin:boolean=true;
private selectedTab = 0;
private user: User;
private error = false;
ngOnInit(){
     
this.user = {
    id: 0,
    username: null,
    password: null,
    retypepassword: null,
    isadmin: null
    }
    
}

    loading = false;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

save(IsSubmitted:boolean) {
    console.log(this.user);
    // call API to save customer
    if(this.user.isadmin != null && IsSubmitted != false)
    {
        
     this.loading = true;
        this.userService.registerUser(this.user)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', false);
                    // this.router.navigate(['/home']);
                    this.nextTab(false);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                    this.error = true;
                });
    }
  }

nextTab(IsSubmitted:boolean) {
if (IsSubmitted){
    this.save(true);
}
  this.selectedTab += 1;
  if (this.selectedTab > 3) this.selectedTab = 0;
}

prevTab() {
  this.selectedTab -= 1;
  if (this.selectedTab < 0) this.selectedTab = 3;
}


close()
{
this.router.navigate(['/home']);
}
}



