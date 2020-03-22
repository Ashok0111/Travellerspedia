import { Component, OnInit } from '@angular/core';
import { ReginInteration } from '../interaction_service/regin_interation';
import * as jwt_decode from "jwt-decode";
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { posting_service } from '../services/services_post';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[posting_service]
})
export class ProfileComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  show_div:boolean=false;
  lastDot:string; 
  fileName:string; 
  ext:string;
  file_type:string;
  constructor(private regininteration: ReginInteration,public profile_upload: posting_service) { 
    this.regininteration.feed_view(true);
    this.regininteration.navbar_landingpage(true);
  }

disp_name:string;
  ngOnInit() {
    let u_d=localStorage.getItem("a-t");
    this.disp_name=this.getDecodedAccessToken(u_d)['user_claims']['name'];
    
  }
  fileChangeEvent(event: any): void {
      this.show_div=true;
    this.imageChangedEvent = event;
    let name=event.target.files[0].name;
    this.file_type=event.target.files[0].type;
    this.lastDot = name.lastIndexOf('.');
    this.fileName = name.substring(0, this.lastDot);
    this.ext = name.substring(this.lastDot + 1);
}
imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    
}
upload_profilepic()
{
  let upload_data={
  file_name:this.fileName,
    file_ext:this.ext,
  file_type:this.file_type,
  data:this.croppedImage.substr(this.croppedImage.indexOf(',') + 1)
};
  
  console.log(upload_data,"upload_data");
  
  this.profile_upload.upload_profilepic(upload_data).subscribe((res) => {
    console.log(res,"profile_upload");
    if(res["status"]=="Success")
    {
    }else{
    
    }
      });

}
close_profilepic()
{
  this.croppedImage='';
  this.imageChangedEvent='';
  this.show_div=false;
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
