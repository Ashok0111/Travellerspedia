import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReginComponent } from './regin/regin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
import { ProfileLandingpageComponent } from './profile/profile-landingpage/profile-landingpage.component';
import { ProfileChangepasswordComponent } from './profile/profile-changepassword/profile-changepassword.component';
import { FeedAreaComponent } from './feed/feed-area/feed-area.component';
import { PostBinComponent } from './feed/post-bin/post-bin.component';
import { AgmCoreModule } from '@agm/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReginComponent,
    LoginComponent,
    RegisterComponent,
    FeedComponent,
    ProfileComponent,
    UserProfileComponent,
    ProfileLandingpageComponent,
    ProfileChangepasswordComponent,
    FeedAreaComponent,
    PostBinComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAko0mEGffNFfW8dZY58lUV1nfPMqXLM9Y',
      libraries: ["places"]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
