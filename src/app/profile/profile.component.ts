import { Component, OnInit } from '@angular/core';
import { ReginInteration } from '../interaction_service/regin_interation';
import * as jwt_decode from "jwt-decode";
import { ImageCroppedEvent } from 'ngx-image-cropper';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
 
  constructor(private regininteration: ReginInteration) { 
    this.regininteration.feed_view(true);
    this.regininteration.navbar_landingpage(true);
  }
disp_name:string;
  ngOnInit() {
    let u_d=localStorage.getItem("a-t");
    this.disp_name=this.getDecodedAccessToken(u_d)['user_claims']['name'];
  }
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
}
imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
}
imageLoaded() {
    // show cropper
}
cropperReady() {
    // cropper ready
}
loadImageFailed() {
    // show message
}
  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }
}
