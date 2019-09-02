import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  createdUser: any = {
    email: 'test@test.test',
    password: 'qwerty'
  };
  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  doLogin(formValue: { email: string; password: string }, isValid: boolean){
    if(formValue.email === this.createdUser.email && formValue.password === this.createdUser.password){
      this.router.navigate(['home']);
      localStorage.setItem('activeSession', 'true');
    }
  }

}
