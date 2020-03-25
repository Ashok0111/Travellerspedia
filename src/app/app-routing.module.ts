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
import { MessageServiceComponent } from './feed/message-service/message-service.component';
import { FeedAreaComponent } from './feed/feed-area/feed-area.component';
import { DisplayProfileComponent } from './display-profile/display-profile.component';
import { ViewPostComponent } from './feed/view-post/view-post.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent ,  },
  { path: 'registration', component: RegisterComponent },
  { path: '', component: LandingPageComponent },
  { path: 'user_profile_view', component: DisplayProfileComponent,canActivate: [AuthGuard] },
  
  { path: 'feed', component: FeedComponent ,canActivate: [AuthGuard],children: [
     { path: 'chat', component: MessageServiceComponent },
     { path: 'feedroll', component: FeedAreaComponent },
     { path: 'postlake', component: ViewPostComponent },
     
    ]},
  { path: 'profile', component: ProfileComponent,canActivate: [AuthGuard],
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
