import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Userlist } from 'src/app/model/Userlist';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  email: string;
  password: string;
  userlist: Userlist[];
  logincheck: boolean;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.fetchUserDetails().subscribe(data => this.userlist = data);
  }

  onSubmit(ev) {
    ev.preventDefault();
    this.logincheck = this.auth.getUserDetails(this.email, this.password, this.userlist);
    if (this.logincheck) { console.log("this.logincheck** ture****") }
    else { console.log("this.logincheck** false****") }

  }

}
