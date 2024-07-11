import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string | null = '';
  

  constructor(private router: Router) { }

  ngOnInit(): void {
    //change
    this.username = localStorage.getItem('username');
  }
  navigateToManageUsers() {
    this.router.navigate(['/manage-users']);
  }

  navigateToSecurity() {
    this.router.navigate(['/security']);
  }

  navigateToGeneralSettings() {
    this.router.navigate(['/general-settings']);

}
}
