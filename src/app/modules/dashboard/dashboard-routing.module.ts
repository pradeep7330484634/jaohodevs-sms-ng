import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ROUTER_LINKS } from 'src/app/shared/constants/router-links.contants';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: "", component: DashboardComponent, children: [
      { path: "", loadChildren: "./home-form/home-form.module#HomeFormModule" },
      {path: ROUTER_LINKS.homeForm_Link, loadChildren: "./home-form/home-form.module#HomeFormModule"},
      { path: ROUTER_LINKS.contactusForm_Link, loadChildren: "./contact-us-form/contact-us-form.module#ContactUsFormModule" },
      { path: ROUTER_LINKS.aboutusForm_Link, loadChildren: "./about-us-form/about-us-form.module#AboutUsFormModule" },
      { path: ROUTER_LINKS.dashboardHome, component: ProfileComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
