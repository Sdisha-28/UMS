import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  users: any[] = [];
  offset: number = 0;
  limit: number = 100;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.http.get<any[]>(`http://localhost:8000/users?offset=${this.offset}&limit=${this.limit}`).subscribe(data => {
      this.users = [...this.users, ...data];
    });
  }

  loadMoreUsers() {
    this.offset += this.limit;
    this.loadUsers();
  }
}
