import { Component, Input,OnInit } from '@angular/core';
import { UserService} from '../../../app/services/user.service';
import { AlertService } from '../../services/alert.service';
import { AuthenticationService } from '../../../app/services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../app/models/user.interface';

@Component({
  moduleId: module.id,
  selector: 'fw-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
showLogin:boolean=true;
  loading = false;
  submitting = false;
  error = false;
private user: User;




  constructor(private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {
          
   }

close()
{
this.router.navigate(['/home']);
}
  ngOnInit() {
      this.user = {
    id: 0,
    username: null,
    password: null,
    retypepassword: null,
    isadmin: null
    }
  }

   login() {
        this.loading = true;
        this.authenticationService.login(this.user.username, this.user.password)
            .subscribe(
                data => {
                    this.router.navigate(['/authenticateduser']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                    this.error = true;
                });
    }

}
