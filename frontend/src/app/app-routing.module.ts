import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { SecurityComponent } from './security/security.component';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { LogoutComponent } from './logout/logout.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './settings/profile/profile.component';
 
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'manage-users', component: ManageUsersComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'general-settings', component: GeneralSettingsComponent },
  {path:'logout',component:LogoutComponent},
  //{path:'settings',component:SettingsComponent},
  //{ path: 'settings/profile', component: ProfileComponent },
  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
