import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeFormRoutingModule } from './home-form-routing.module';
import { HomeFormComponent } from './home-form.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeFormRoutingModule
  ],
  declarations: [
    HomeFormComponent
  ]
})
export class HomeFormModule { }
