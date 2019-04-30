import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ROUTER_LINKS } from 'src/app/shared/constants/router-links.contants';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
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
      this.router.navigate(["/" + ROUTER_LINKS.authentication_Link + "/" + ROUTER_LINKS.login_Link]);
    } else if (this.form.invalid) {
      console.log(this.form.value);
    }
  }

}
