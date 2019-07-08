import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  showHeader : string;
  constructor() { }

  ngOnInit() {
    console.log("$$$$inside core "+localStorage.getItem('loginStatus'));
    this.showHeader= localStorage.getItem('loginStatus');
    console.log("$$$$  this.showHeader core "+  this.showHeader);
  }

  get headerVariable(){
    console.log("inside get "+localStorage.getItem('loginStatus'));
    return localStorage.getItem('loginStatus');
  }

}
