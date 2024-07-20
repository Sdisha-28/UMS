import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';  // Import the AuthService

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private router: Router, private http: HttpClient, private authService: AuthService) { }  // Inject AuthService

  confirmLogout() {
    this.http.post('http://localhost:8000/logout', {}).subscribe(() => {
      // Handle successful logout
      this.authService.clearUserEmail();  // Clear user email from session storage
      this.router.navigate(['/login']);
    }, error => {
      // Handle error
      console.error('Logout error', error);
    });
  }
}
