// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {
//   email: string = '';
//   name: string = '';
//   phone: string = '';
//   password: string = '';
//   confirmPassword: string = '';
//   city: string = '';
//   role: string = '';
//   gender: string = '';

//   constructor() { }

//   ngOnInit(): void {
//   }

//   register() {
//     // Your registration logic here
//     console.log('Email:', this.email);
//     console.log('Name:', this.name);
//     console.log('Phone:', this.phone);
//     console.log('Password:', this.password);
//     console.log('Confirm Password:', this.confirmPassword);
//     console.log('City:', this.city);
//     console.log('Role:', this.role);
//     console.log('Gender:', this.gender);
//   }
// }


// working code with backend
// import { Component, OnInit } from '@angular/core';
// import { RegisterService } from './register.service';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {
//   email: string = '';
//   name: string = '';
//   phone: string = '';
//   password: string = '';
//   confirmPassword: string = '';
//   city: string = '';
//   role: string = '';
//   gender: string = '';

//   constructor(private registerService: RegisterService) { }

//   ngOnInit(): void {
//   }

//   register() {
//     const user = {
//       email: this.email,
//       name: this.name,
//       phone: this.phone,
//       password: this.password,
//       confirmPassword: this.confirmPassword,
//       city: this.city,
//       role: this.role,
//       gender: this.gender
//     };

//     this.registerService.register(user).subscribe({
//       next: (response) => {
//         console.log('User registered successfully', response);
//       },
//       error: (error) => {
//         console.error('Error registering user', error);
//       },
//       complete: () => {
//         console.log('Registration request completed');
//       }
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string = '';
  name: string = '';
  dob: string='';
  phone: string = '';
  password: string = '';
  confirmPassword: string = '';
  city: string = '';
  role: string = '';
  gender: string = '';
  message: string = '';
  error: string = '';

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  register() {
    const user = {
      email: this.email,
      name: this.name,
      dob: this.dob,
      phone: this.phone,
      password: this.password,
      confirmPassword: this.confirmPassword,
      city: this.city,
      role: this.role,
      gender: this.gender
    };

    this.registerService.register(user).subscribe({
      next: (response) => {
        this.message = response.message;
        this.error = '';
      },
      error: (error) => {
        this.message = '';
        if (error.status === 400 && error.error.detail === "Passwords do not match") {
          this.error = "Passwords do not match";
        } else if (error.status === 409 ) {
          this.error = "User already exists";
        } else {
          this.error = error.error.detail || 'Error registering user';
        }
      },
      complete: () => {
        console.log('Registration request completed');
      }
    });
  }
}
