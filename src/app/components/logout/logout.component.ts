import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router,
              private auth: AuthService) { }

  ngOnInit() {
    console.log("*******logout*********")
    localStorage.removeItem('loginStatus')   
    this.auth.setLogin(false);  
    this.router.navigate(['login']);
  }

  

}
