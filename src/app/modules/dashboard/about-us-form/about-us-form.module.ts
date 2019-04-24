import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsFormRoutingModule } from './about-us-form-routing.module';
import { AboutUsFormComponent } from './about-us-form.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AboutUsFormRoutingModule
  ],
  declarations: [
    AboutUsFormComponent,
  ]
})
export class AboutUsFormModule { }
