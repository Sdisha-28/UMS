import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string = '';
  name: string = '';
  phone: string = '';
  password: string = '';
  confirmPassword: string = '';
  city: string = '';
  role: string = '';
  gender: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  register() {
    // Your registration logic here
    console.log('Email:', this.email);
    console.log('Name:', this.name);
    console.log('Phone:', this.phone);
    console.log('Password:', this.password);
    console.log('Confirm Password:', this.confirmPassword);
    console.log('City:', this.city);
    console.log('Role:', this.role);
    console.log('Gender:', this.gender);
  }
}
