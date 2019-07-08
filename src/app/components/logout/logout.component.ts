import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  @Output() hideHeader: EventEmitter<any> = new EventEmitter;

  constructor(private router: Router,
    private auth: AuthService) { }

  ngOnInit() {
    console.log("*******logout*********")
    this.auth.setLogin(false);
    this.hideHeader.emit(false);
    
    localStorage.removeItem('loginStatus')
    this.router.navigate(['login']);
  }



}
