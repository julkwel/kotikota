import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { KotikotaLoginComponent } from './kotikota-login/kotikota-login.component';
import { KotikotaFrontComponent } from './kotikota-front/kotikota-front.component';
import {
  AuthServiceConfig,
  FacebookLoginProvider,
  GoogleLoginProvider,
  LinkedinLoginProvider
} from "angular-6-social-login";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {Social} from "./utils/Constant.Social";
import { KotikotaDashboardComponent } from './kotikota-dashboard/kotikota-dashboard.component';
import { TeamFormComponent } from './kotikota/team-form/team-form.component';
import { GiveupFormComponent } from './kotikota/giveup-form/giveup-form.component';
import { DonateComponent } from './kotikota/donate/donate.component';
import { KotikotaFooterComponent } from './kotikota-footer/kotikota-footer.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

export function getAuthServiceConfigs(){
  let config: AuthServiceConfig;
  config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider(Social.FACEBOOK_ID)
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(Social.GOOGLE_APP_ID)
        },
        {
          id: LinkedinLoginProvider.PROVIDER_ID,
          provider: new LinkedinLoginProvider(Social.LINKEDIN_APP_ID)
        },
      ]
  );
  return config
}

@NgModule({
  declarations: [
    AppComponent,
    KotikotaLoginComponent,
    KotikotaFrontComponent,
    KotikotaDashboardComponent,
    TeamFormComponent,
    GiveupFormComponent,
    DonateComponent,
    KotikotaFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})




export class AppModule { }
