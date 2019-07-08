import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Userlist } from 'src/app/model/Userlist';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  //variables declared

  email: string;
  password: string;
  userlist: Userlist[];
  logincheck: boolean;


  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.auth.fetchUserDetails().subscribe(data => this.userlist = data);
  }

  onSubmit(ev) {
    ev.preventDefault();
    this.logincheck = this.auth.getUserDetails(this.email, this.password, this.userlist);
    if (this.logincheck) {
       console.log("this.logincheck** true****");
       this.auth.setLogin(true);
        this.router.navigate(['/Home']);
        // this.router.navigate(['/tabs/list'])
      }
    else { 
      console.log("this.logincheck** false****") }

  }

}
