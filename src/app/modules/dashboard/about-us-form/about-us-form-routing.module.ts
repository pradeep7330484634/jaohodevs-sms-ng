import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsFormComponent } from './about-us-form.component';

const routes: Routes = [
  {path: "", component: AboutUsFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsFormRoutingModule { }
