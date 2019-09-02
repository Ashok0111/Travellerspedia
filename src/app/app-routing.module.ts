import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
import { ProfileLandingpageComponent } from './profile/profile-landingpage/profile-landingpage.component';
import { ProfileChangepasswordComponent } from './profile/profile-changepassword/profile-changepassword.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent ,  },
  { path: 'registration', component: RegisterComponent },
  { path: '', component: LandingPageComponent },
  { path: 'feed', component: FeedComponent ,canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent,
  children: [
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'profile_landingpage', component: ProfileLandingpageComponent },
    { path: 'profile_changepassword', component: ProfileChangepasswordComponent },
  ],
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
