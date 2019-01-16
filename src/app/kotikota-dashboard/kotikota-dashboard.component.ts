import { Component, OnInit } from '@angular/core';
import {localStorageService} from "../services/localStorage.service";
import {loginService} from "../services/login.service";

@Component({
  selector: 'app-kotikota-dashboard',
  templateUrl: './kotikota-dashboard.component.html',
  styleUrls: ['./kotikota-dashboard.component.css']
})
export class KotikotaDashboardComponent implements OnInit {

  profile:any;
  constructor(private localStorageS:localStorageService,
              private isLogin:loginService) { }

  ngOnInit() {
    this.profile = this.getIdentifiant();
    console.log(this.profile)
  }

  getIdentifiant(){
    return this.localStorageS.getLocalstorage('userdata');
  }
}
