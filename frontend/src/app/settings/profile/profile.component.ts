// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { AuthService } from 'src/app/auth.service';
// import { environment } from 'src/environments/environment';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent implements OnInit {
//   user: any = {};
//   isEditing: boolean = false;
//   selectedFile: File | null = null;
//   updateMessage: string | null = null;

//   constructor(private http: HttpClient, private authService: AuthService) {}

//   ngOnInit(): void {
//     this.fetchUserProfile();
//   }

//   fetchUserProfile() {
//     const email = this.authService.getUserEmail();
//     this.http.get(`${environment.apiUrl}/users/${email}/profiledetails`).subscribe((data: any) => {
//       this.user = data;
     
//     });
//   }

//   toggleEdit() {
//     this.isEditing = !this.isEditing;
//   }

//   onFileChange(event: any) {
//     if (event.target.files.length > 0) {
//       this.selectedFile = event.target.files[0];
//     }
//   }

//   updateProfile() {
//     const formData = new FormData();
//     formData.append('email', this.user.email);
//     formData.append('city', this.user.city);
//     formData.append('phone', this.user.phone);
//     formData.append('role', this.user.role);
//     formData.append('dob', this.user.dob);

    

//     this.http.put(`${environment.apiUrl}/users/${this.user.email}`, formData).subscribe({
//       next: () => {
//         this.isEditing = false;
//         this.updateMessage = "Updation completed";
//         this.fetchUserProfile();
//       },
//       error: (err: any) => {
//         console.error('Profile update failed', err);
//         this.updateMessage = "Profile update failed";
//       }
//     });
//   }
// // }
// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { AuthService } from 'src/app/auth.service';
// import { environment } from 'src/environments/environment';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent implements OnInit {
//   user: any = {};
//   isEditing: boolean = false;
//   selectedFile: File | null = null;
//   updateMessage: string | null = null;

//   constructor(private http: HttpClient, private authService: AuthService) {}

//   ngOnInit(): void {
//     this.fetchUserProfile();
//   }

//   fetchUserProfile() {
//     const email = this.authService.getUserEmail();
//     this.http.get(`${environment.apiUrl}/users/${email}/profiledetails`).subscribe((data: any) => {
//       this.user = data;
//     });
//   }

//   toggleEdit() {
//     this.isEditing = !this.isEditing;
//   }

//   updateProfile() {
//     const updateData: any = {};

//     if (this.user.city) updateData.city = this.user.city;
//     if (this.user.phone) updateData.phone = this.user.phone;
//     if (this.user.role) updateData.role = this.user.role;
//     if (this.user.dob) updateData.dob = this.user.dob;

//     this.http.put(`${environment.apiUrl}/users/${this.user.email}`, updateData).subscribe({
//       next: () => {
//         this.isEditing = false;
//         this.updateMessage = "Profile updated successfully";
//         this.fetchUserProfile();
//       },
//       error: (err: any) => {
//         console.error('Profile update failed', err);
//         this.updateMessage = "Profile update failed";
//       }
//     });
//   }
// } Third comment
// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { AuthService } from 'src/app/auth.service';
// import { environment } from 'src/environments/environment';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent implements OnInit {
//   user: any = {};
//   isEditing: boolean = false;
//   selectedFile: File | null = null;
//   updateMessage: string | null = null;

//   constructor(private http: HttpClient, private authService: AuthService) {}

//   ngOnInit(): void {
//     this.fetchUserProfile();
//   }

//   fetchUserProfile() {
//     const email = this.authService.getUserEmail();
//     this.http.get(`${environment.apiUrl}/users/${email}/profiledetails`).subscribe((data: any) => {
//       this.user = data;
//     });
//   }

//   toggleEdit() {
//     this.isEditing = !this.isEditing;
//   }

//   updateProfile() {
//     const updateData: any = {};

//     if (this.user.city) updateData.city = this.user.city;
//     if (this.user.phone) updateData.phone = this.user.phone;
//     if (this.user.role) updateData.role = this.user.role;
//     if (this.user.dob) updateData.dob = this.user.dob;

//     this.http.put(`${environment.apiUrl}/users/${this.user.email}`, updateData).subscribe({
//       next: () => {
//         this.isEditing = false;
//         this.updateMessage = "Profile updated successfully";
//         this.fetchUserProfile();
//       },
//       error: (err: any) => {
//         console.error('Profile update failed', err);
//         this.updateMessage = "Profile update failed";
//       }
//     });
//   }
// }Fourth comment dob and phone no is not displayed in the profile page


// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { AuthService } from 'src/app/auth.service';
// import { environment } from 'src/environments/environment';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent implements OnInit {
//   user: any = {};
//   isEditing: boolean = false;
//   selectedFile: File | null = null;
//   updateMessage: string | null = null;

//   constructor(private http: HttpClient, private authService: AuthService) {}

//   ngOnInit(): void {
//     this.fetchUserProfile();
//   }

//   fetchUserProfile() {
//     const email = this.authService.getUserEmail();
//     this.http.get(`${environment.apiUrl}/users/${email}/profiledetails`).subscribe((data: any) => {
//       this.user = data;
//     });
//   }

//   toggleEdit() {
//     this.isEditing = !this.isEditing;
//   }

//   updateProfile() {
//     const updateData: any = {};

//     if (this.user.city) updateData.city = this.user.city;
//     if (this.user.phone) updateData.phone = this.user.phone;
//     if (this.user.role) updateData.role = this.user.role;
//     if (this.user.dob) updateData.dob = this.user.dob;

//     this.http.put(`${environment.apiUrl}/users/${this.user.email}`, updateData).subscribe({
//       next: () => {
//         this.isEditing = false;
//         this.updateMessage = "Profile updated successfully";
//         this.fetchUpdatedUserProfile();  // Fetch updated profile
//       },
//       error: (err: any) => {
//         console.error('Profile update failed', err);
//         this.updateMessage = "Profile update failed";
//       }
//     });
//   }

//   fetchUpdatedUserProfile() {
//     const email = this.authService.getUserEmail();
//     this.http.get(`${environment.apiUrl}/users/${email}/profiledetails`).subscribe((data: any) => {
//       this.user = data;
//       this.updateMessage = "Profile updated successfully";  // Display success message
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = {};
  email: string = '';
  name: string = '';
  dob: string = '';
  phone: string = '';
  city: string = '';
  role: string = '';
  gender: string = '';
  isEditing: boolean = false;
  updateMessage: string | null = null;
  error: string | null = null;

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    this.fetchUserProfile();
  }

  fetchUserProfile() {
    const email = this.authService.getUserEmail();
    this.http.get(`${environment.apiUrl}/users/${email}/profiledetails`).subscribe((data: any) => {
      this.user = data;
      this.email = data.email;
      this.name = data.name;
      this.dob = data.dob;
      this.phone = data.phone;
      this.city = data.city;
      this.role = data.role;
      this.gender = data.gender;
    });
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  updateProfile() {
    // const updateData = {
    //   email: this.email,
    //   name: this.name,
    //   dob: this.dob,
    //   phone: this.phone,
    //   city: this.city,
    //   role: this.role,
    //   gender: this.gender
    // };
    const updateData: any = {};

    if (this.city) updateData.city = this.city;
    if (this.phone) updateData.phone = this.phone;
    if (this.role) updateData.role = this.role;
    if (this.dob) updateData.dob = this.dob;

    this.http.put(`${environment.apiUrl}/users/${this.email}`, updateData).subscribe({
      next: (response: any) => {
        this.isEditing = false;
        this.updateMessage = 'Profile updated successfully';
        this.error = null;
        this.fetchUserProfile();
      },
      error: (err: any) => {
        this.updateMessage = null;
        this.error = err.error.detail || 'Error updating profile';
      },
      complete: () => {
        console.log('Profile update request completed');
      }
    });
  }
}
