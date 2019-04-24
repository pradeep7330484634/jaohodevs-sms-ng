import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { HeaderComponent } from 'src/app/core/layout/header/header.component';
import { FooterComponent } from 'src/app/core/layout/footer/footer.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
