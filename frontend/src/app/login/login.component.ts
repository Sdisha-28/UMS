
// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { AuthService } from '../auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   email: string = '';
//   password: string = '';

//   constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}

//   ngOnInit(): void {
//   }

//   login() {
//     const loginData = { email: this.email, password: this.password };
//     this.http.post('http://localhost:8000/login', loginData)
//       .subscribe({
//         next: (response: any) => {
//           console.log('Login successful', response);
//           localStorage.setItem('username', response.name);
//           this.router.navigate(['/home']);  // Redirect to home page on success
//         },
//         error: (error) => {
//           console.error('Login failed', error);
//           alert('Invalid email or password');  // Display error message
//         }
//       });

    
//   }
// }
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  login() {
    const loginData = { email: this.email, password: this.password };
    this.http.post('http://localhost:8000/login', loginData)
      .subscribe({
        next: (response: any) => {
          console.log('Login successful', response);
          this.authService.setUserEmail(this.email);  // Store the email using AuthService
          localStorage.setItem('username', response.name);
          this.router.navigate(['/home']);  // Redirect to home page on success
        },
        error: (error) => {
          console.error('Login failed', error);
          alert('Invalid email or password');  // Display error message
        }
      });
  }
}
