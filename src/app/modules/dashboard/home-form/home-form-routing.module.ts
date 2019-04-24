import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeFormComponent } from './home-form.component';

const HOME_FORM_ROUTES: Routes = [
  { path: "", component: HomeFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(HOME_FORM_ROUTES)],
  exports: [RouterModule]
})
export class HomeFormRoutingModule { }
