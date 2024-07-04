import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor() {}

  ngOnInit(): void {
  }
  // You can add a login method to handle form submission
  login() {
    // Your login logic here
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
