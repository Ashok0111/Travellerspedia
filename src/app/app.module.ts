import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { HttpClientModule } from '@angular/common/http';
import { ImageCropperModule } from 'ngx-image-cropper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MessageServiceComponent } from './feed/message-service/message-service.component';
import { AuthService } from './auth/auth.service';
import { SidebarComponent } from './sidebar/sidebar.component';
// import filepond module
import { FilePondModule, registerPlugin } from 'ngx-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageEdit from 'filepond-plugin-image-edit';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import and register filepond file type validation plugin
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import { DisplayProfileComponent } from './display-profile/display-profile.component';
import { ChatboxComponent } from './feed/chatbox/chatbox.component';
import { ViewPostComponent } from './feed/view-post/view-post.component';
registerPlugin(FilePondPluginFileValidateType,
 // FilePondPluginImagePreview,
  FilePondPluginImageEdit,
  FilePondPluginImageCrop,
  FilePondPluginFileEncode
  );
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
    LandingPageComponent,
    MessageServiceComponent,
    SidebarComponent,
    DisplayProfileComponent,
    ChatboxComponent,
    ViewPostComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FilePondModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ImageCropperModule,
    NgbModule
  ],
  providers: [AuthService ,],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
