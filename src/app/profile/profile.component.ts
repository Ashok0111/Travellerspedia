import { Component, OnInit } from '@angular/core';
import { ReginInteration } from '../interaction_service/regin_interation';
import * as jwt_decode from "jwt-decode";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 
  constructor(private regininteration: ReginInteration) { 
    this.regininteration.feed_view(true);
    this.regininteration.navbar_landingpage(true);
  }
disp_name:string;
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
