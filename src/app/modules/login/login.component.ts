import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ROUTE_CONFIG } from '../../core/constants/route-config.constant';
import { LocalStorageUtils } from '../../core/utils/localstorage-utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    console.log('this.loginForm.value:', this.loginForm)

    const controls = this.loginForm.controls;

    /** check form */
    if (this.loginForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched(),
      );

      return;
    }

    const formData = this.loginForm.value;

    LocalStorageUtils.setUserData(formData);

    // Navigate to home page
    this.router.navigate([ROUTE_CONFIG.HOME]);

  }
}
