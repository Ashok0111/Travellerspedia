import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as jwt_decode from "jwt-decode";
import { ReginInteration } from '../../interaction_service/regin_interation';
@Component({
  selector: 'app-profile-landingpage',
  templateUrl: './profile-landingpage.component.html',
  styleUrls: ['./profile-landingpage.component.css']
})
export class ProfileLandingpageComponent implements OnInit {

  constructor(private regininteration: ReginInteration) { 
    this.regininteration.feed_view(true);
    this.regininteration.navbar_landingpage(true);
  }
  @ViewChild('myPond', { static: true }) myPond: any;
  disp_name:string;
  pondOptions = {
    class: 'my-filepond',
    allowImagePreview:true,
    imagePreviewMaxFileSize:5,
    imagePreviewHeight: 100,
    imageResizeTargetWidth: 100,
    imageResizeTargetHeight: 100,
    allowImageCrop:true,
    imageCropAspectRatio: '1:1',
  }
    
  pondHandleAddFile(event: any) {
    console.log('A file was added', event);
  }
  
  public searchElementRef: ElementRef;
  ngOnInit() {
    
    let u_d=localStorage.getItem("a-t");
    this.disp_name=this.getDecodedAccessToken(u_d)['user_claims']['name'];
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
