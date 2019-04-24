import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PagesComponent } from './pages.component';
import { ROUTER_LINKS } from 'src/app/shared/constants/router-links.contants';

const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      { path: "", component: HomeComponent },
      { path: ROUTER_LINKS.home_Link, component: HomeComponent },
      { path: ROUTER_LINKS.aboutUs_Link, component: AboutUsComponent },
      { path: ROUTER_LINKS.contactUs_Link, component: ContactUsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
