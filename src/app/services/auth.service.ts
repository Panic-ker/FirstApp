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

  private isLogStatus = false;
  userlist: Userlist[];
  userlist2: Userlist[];

  setLogin(value: boolean){
    this.isLogStatus=value;
    console.log("this.isLogStatus"+this.isLogStatus);
  }

  get isLogin(){
    
    console.log("isLogin"+this.isLogStatus);
    return this.isLogStatus;
  }

  fetchUserDetails(): Observable<Userlist[]> {
    const url: string = 'http://localhost:3000/user';
    return this.http.get<Userlist[]>(url);
  }

  getUserDetails(username, password, userlist) {
    this.fetchUserDetails().subscribe(data => this.userlist2 = data);
    console.log("this inside auth");
    console.log(userlist);
    console.log(username, password);
    this.userlist2 = userlist;
    console.log("checked*****1*");
    this.userlist2 = this.userlist2.filter(fil => fil.email == username)
    console.log("checked******");
    console.log(this.userlist2);
    if (this.userlist2.length > 0) { console.log("checked** ture****"); return true }
    else { console.log("checked** false****"); return false }

  }

}


}
