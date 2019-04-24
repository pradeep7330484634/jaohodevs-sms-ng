import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTER_LINKS } from './shared/constants/router-links.contants';

const routes: Routes = [
  { path: '',  redirectTo: "auth", pathMatch: 'full' },
  { path: '', loadChildren: "./modules/authentication/authentication.module#AuthenticationModule" },
  { path: ROUTER_LINKS.authentication_Link, loadChildren: "./modules/authentication/authentication.module#AuthenticationModule" },
  { path: ROUTER_LINKS.pageCode_Link, loadChildren: "./modules/pages/pages.module#PagesModule" },
  { path: ROUTER_LINKS.dashboard_Link, loadChildren: "./modules/dashboard/dashboard.module#DashboardModule" },
  { path: '**', loadChildren: "./modules/page-not-found/page-not-found.module#PageNotFoundModule" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
