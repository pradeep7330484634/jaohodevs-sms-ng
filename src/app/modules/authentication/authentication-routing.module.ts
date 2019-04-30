import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ROUTER_LINKS } from 'src/app/shared/constants/router-links.contants';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: ROUTER_LINKS.login_Link, component: LoginComponent },
  { path: ROUTER_LINKS.signup_Link, component: SignupComponent },
  {path: ROUTER_LINKS.forgotPassword_Link, component: ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
