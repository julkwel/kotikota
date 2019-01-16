import {Component, OnInit} from '@angular/core';
import {loginService} from "./services/login.service";
import {localStorageService} from "./services/localStorage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  name:any;
  isLogged:boolean;
  constructor(private login:localStorageService,
              private router:Router){
    this.name = login.getLocalstorage('userdata');
    if (this.name != null){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
  }
  title = 'Kotikota';
  ngOnInit() {}

  logOut(){
    this.login.delLocalStorage('userdata');
    this.router.navigate(['/login'])
  }
}
