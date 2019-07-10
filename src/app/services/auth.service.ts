import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Userlist } from '../model/Userlist';
import { stringify } from '@angular/core/src/util';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private http: HttpClient) { }

  // initializing the variables
  private isLogStatus = JSON.parse(localStorage.getItem('loginStatus') || 'false');
  userlist: Userlist[];
  userlist2: Userlist[];


  // changing status of login variable
  setLogin(value: boolean) {
    this.isLogStatus = value;
    localStorage.setItem('loginStatus', this.isLogStatus);
  }



  // emiting the changed status to auth guard
  get isLogin() {
    return JSON.parse(localStorage.getItem('loginStatus') || this.isLogStatus.toString());
  }


  //getting the user details from json
  fetchUserDetails(): Observable<Userlist[]> {
    const url: string = 'http://localhost:3000/user';
    return this.http.get<Userlist[]>(url);
  }


  // check if user exists in the json
  getUserDetails(username, password, userlist) {
    this.fetchUserDetails().subscribe(data => this.userlist2 = data);

    this.userlist2 = userlist;
    this.userlist2 = this.userlist2.filter(fil => fil.email == username)

    if (this.userlist2.length > 0) { return true }
    else { return false }

  }

}


