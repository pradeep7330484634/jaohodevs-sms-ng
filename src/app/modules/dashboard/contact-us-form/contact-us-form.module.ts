import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsFormRoutingModule } from './contact-us-form-routing.module';
import { ContactUsFormComponent } from './contact-us-form.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ContactUsFormRoutingModule
  ],
  declarations: [
    ContactUsFormComponent
  ]
})
export class ContactUsFormModule { }
