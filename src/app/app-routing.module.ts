import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KotikotaLoginComponent } from "./kotikota-login/kotikota-login.component";
import { KotikotaFrontComponent } from "./kotikota-front/kotikota-front.component";
import { KotikotaDashboardComponent } from "./kotikota-dashboard/kotikota-dashboard.component";
import { TeamFormComponent } from './kotikota/team-form/team-form.component';
import { GiveupFormComponent } from './kotikota/giveup-form/giveup-form.component';

const appRoutes: Routes = [
  { path: "login", component: KotikotaLoginComponent },
  { path: "dashboard", component: KotikotaDashboardComponent },
  { path: "team-build", component: TeamFormComponent },
  { path: "giveup", component: GiveupFormComponent },
  { path: "", component: KotikotaFrontComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
