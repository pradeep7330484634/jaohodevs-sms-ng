import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ROUTER_LINKS } from 'src/app/shared/constants/router-links.contants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.createForm();
  }
  // reactive forms create 
  createForm() {
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    });
  }
  // loing form submit
  submitForm() {
    if (this.form.valid) {
      this.router.navigate(["/" + ROUTER_LINKS.dashboard_Link + "/" + ROUTER_LINKS.dashboardHome]);
    } else if (this.form.invalid) {
      console.log(this.form.value);
    }
  }
  // validation error
  getError(formControl: any) {
    console.log(formControl);
    return this.form.controls.formControl.invalid &&
      (this.form.controls.formControl.pristine || this.form.controls.formControl.touched);
  }

}
