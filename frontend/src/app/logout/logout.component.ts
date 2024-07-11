import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private router: Router, private http: HttpClient) { }

  confirmLogout() {
    this.http.post('http://localhost:8000/logout', {}).subscribe(() => {
      // Handle successful logout
      this.router.navigate(['/login']);
    }, error => {
      // Handle error
      console.error('Logout error', error);
    });
  }
}