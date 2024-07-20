import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly userEmailKey = 'userEmail';

  setUserEmail(email: string) {
    sessionStorage.setItem(this.userEmailKey, email);
  }

  getUserEmail(): string {
    return sessionStorage.getItem(this.userEmailKey) || '';
  }

  clearUserEmail() {
    sessionStorage.removeItem(this.userEmailKey);
  }
}



