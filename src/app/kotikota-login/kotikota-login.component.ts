import { Component, OnInit } from "@angular/core";
import { localStorageService } from "../services/localStorage.service";
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider,
  LinkedinLoginProvider,
  SocialLoginModule
} from "angular-6-social-login";
import { Router } from "@angular/router";
import { loginService } from "../services/login.service";

@Component({
  selector: "app-kotikota-login",
  templateUrl: "./kotikota-login.component.html",
  styleUrls: ["./kotikota-login.component.css"],
  providers: [SocialLoginModule, AuthService]
})
export class KotikotaLoginComponent implements OnInit {
  constructor(
    private socialAuthService: AuthService,
    private router: Router,
    private localStorageService: localStorageService,
    private login: loginService
  ) {}

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "linkedin") {
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(userData => {
      localStorage.setItem("email", userData.email);
      localStorage.setItem("name", userData.name);
      localStorage.setItem("image", userData.image);
      this.localStorageService.setLocalStorage("userdata", userData);
      if (userData) {
        this.router.navigate(["/dashboard"]);
        this.login.login = true;
      } else {
        this.router.navigate(["/login"]);
      }
      console.log(socialPlatform + " sign in data : ", userData);
    });
  }

  ngOnInit() {}
}
